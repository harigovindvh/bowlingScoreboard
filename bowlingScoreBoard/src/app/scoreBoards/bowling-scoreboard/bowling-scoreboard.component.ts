import { Component, OnInit } from '@angular/core';
import { AppConfigurationService } from 'src/app/core/services/app-configuration.service';

@Component({
  selector: 'app-bowling-scoreboard',
  templateUrl: './bowling-scoreboard.component.html',
  styleUrls: ['./bowling-scoreboard.component.scss']
})
export class BowlingScoreboardComponent implements OnInit {
  frames: any = [];
  currentFrame = 0;
  frameCount: number = 0;
  enableSpar: boolean = false;
  buttons: any = [];
  gameFinished: boolean = false;
  totalScore: number = 0;

  //Configuratuion variables
  lastFrame: number;
  maxFrameScore: number;

  constructor(
    private readonly _appConfigurationService: AppConfigurationService,
  ) {
    this.lastFrame = _appConfigurationService.bowlingGameConfig.lastFrame;
    this.maxFrameScore = _appConfigurationService.bowlingGameConfig.maxScore;
  }

  ngOnInit(): void {
    this.createRollButtons();
  }

  /**
   * Called after pins rolled
   * @param count rolled pin count
   */
  rollPin(count: any) {
    if (typeof (count) === 'number') {
      this.processRoll(count);
    } else
      switch (count) {
        case "/":
          this.processSpare();
          break;
        case 'X':
          this.processStrike();
          break;

        default:
          break;
      }
  }

  /**
   * Process normal rolls
   * @param count rolled pin count
   */
  processRoll(count: number) {
    if (!this.frames[this.frameCount]) {
      this.frames[this.frameCount] = {};
    }
    if (this.frames[this.frameCount].rollOne === undefined) {
      this.frames[this.frameCount].rollOne = count
      this.restrictRolls(true, count);
      this.enableSpar = true;
    } else {
      if (this.frames[this.frameCount].rollTwo === undefined) {
        this.enableSpar = this.frameCount === this.lastFrame;
        this.frames[this.frameCount].rollTwo = count
        this.updateCurrentFrameScore();        
        this.restrictRolls(this.frameCount === this.lastFrame, count);
        this.checkSparPendingReward();
        this.checkStrikePendingReward();
        if (this.frameCount === this.lastFrame && this.frames[this.lastFrame].rollOne !== this.maxFrameScore) {
          this.endGame();
        }
      } else {
        if (this.frameCount === this.lastFrame) {
          this.frames[this.frameCount].rollThree = count
          this.frames[this.frameCount].grandTotal = this.frames[this.frameCount].grandTotal + count;
          this.checkSparPendingReward();
          this.checkStrikePendingReward();
          this.endGame();
        }
      }
      if (this.frameCount !== this.lastFrame) {
        this.frameCount++
      }
    }
  }

  /**
   * Process spare rolls
   */
  processSpare() {
    this.restrictRolls(false);
    this.enableSpar = false;
    this.frames[this.frameCount].isSpare = true;
    this.frames[this.frameCount].sparPendingReward = 1;
    if (this.frames[this.frameCount].rollTwo === undefined) {
      this.frames[this.frameCount].rollTwo = this.maxFrameScore - this.frames[this.frameCount].rollOne;
      this.updateCurrentFrameScore();
      this.checkSparPendingReward();
      this.checkStrikePendingReward();
    } else {
      this.frames[this.frameCount].rollThree = this.maxFrameScore - this.frames[this.frameCount].rollTwo;
      this.frames[this.frameCount].grandTotal = this.frames[this.frameCount].grandTotal + this.frames[this.frameCount].rollThree
      this.endGame();
    }

    if (this.frameCount !== this.lastFrame) {
      this.frameCount++
    }
  }

  /**
   * Process strike rolls
   */
  processStrike() {
    if (!this.frames[this.frameCount]) {
      this.frames[this.frameCount] = {};
    }
    this.enableSpar = false;
    this.frames[this.frameCount].isStrike = true;
    if (this.frameCount === this.lastFrame) {
      this.calculateFrameTenStrike()
    } else {
      this.frames[this.frameCount].strikePendingReward = 2;
      this.frames[this.frameCount].grandTotal = this.frameCount ? (this.frames[this.frameCount - 1].grandTotal + this.maxFrameScore) : this.maxFrameScore
      this.checkSparPendingReward();
      this.checkStrikePendingReward();
      this.frameCount++
    }
  }



  /**
   * Process strikes from frame 10
   */
  calculateFrameTenStrike() {
    const frameTen = this.frames[this.frameCount];
    if (frameTen.rollOne === undefined) {
      this.frames[this.frameCount].rollOne = this.maxFrameScore;
      this.frames[this.frameCount].grandTotal = this.frames[this.frameCount - 1].grandTotal + frameTen.rollOne
    } else
      if (frameTen.rollTwo === undefined) {
        this.frames[this.frameCount].rollTwo = this.maxFrameScore;
        this.frames[this.frameCount].grandTotal = this.frames[this.frameCount].grandTotal + frameTen.rollTwo
      } else {
        this.frames[this.frameCount].rollThree = this.maxFrameScore;
        this.frames[this.frameCount].grandTotal = this.frames[this.frameCount].grandTotal + frameTen.rollThree;
        this.endGame();
      }
    this.checkSparPendingReward();
    this.checkStrikePendingReward();
  }


  /**
   * Resticts/release available pins
   * @param isRestriction to check if pins are to be restricted or not
   * @param value Roll one vlaue to calculate pin restriction
   */
  restrictRolls(isRestriction: boolean, value?: number) {
    if (isRestriction) {
      const rollOneValue = value;
      this.buttons.forEach((button: any) => {
        if ((button.value + rollOneValue) > this.maxFrameScore - 1) {
          button.disabled = true;
        }
      });
      return;
    }
    this.buttons.forEach((button: any) => {
      button.disabled = false;
    });
  }

  /**
   * Check previous frames if there is any spar bonus is to be distributed
   */
  checkSparPendingReward() {
    this.frames.forEach((frame: any, index: number) => {
      if (frame && frame.sparPendingReward) {
        if (this.frames[index + 1]?.isStrike) {
          this.calculateFramesGrandTotal(index, this.maxFrameScore, 2);
          frame.sparPendingReward = 0;
        } else
          if (this.frames[index + 1]?.rollOne >= 0) {
            this.calculateFramesGrandTotal(index, this.frames[index + 1].rollOne, 2);
            frame.sparPendingReward = 0;
          }
      }

    });
  }

  /**
   * Check previous frames if there is any Strike bonus is to be distributed
   */
  checkStrikePendingReward() {
    this.frames.forEach((frame: any, index: number) => {
      if (!frame)
        return;
      if (frame.strikePendingReward === 2) {
        if (this.frames[index + 1]?.isStrike) {
          this.calculateFramesGrandTotal(index, this.maxFrameScore, 2);
          frame.strikePendingReward = 1;
        } else
          if (this.frames[index + 1]?.rollOne >= 0) {
            this.calculateFramesGrandTotal(index, this.frames[index + 1].rollOne, 2);
            frame.strikePendingReward = 1;
          }
      }
      if (frame.strikePendingReward === 1) {
        if (this.frames[index + 1]?.rollTwo >= 0) {
          this.calculateFramesGrandTotal(index, this.frames[index + 1].rollTwo, 2);
          frame.strikePendingReward = 0;
        } else
          if (this.frames[index + 2]?.isStrike) {
            this.calculateFramesGrandTotal(index, this.maxFrameScore, 3);
            frame.strikePendingReward = 0;
          } else
            if (this.frames[index + 2]?.rollOne >= 0) {
              this.calculateFramesGrandTotal(index, this.frames[index + 2].rollOne, 3);
              frame.strikePendingReward = 0;
            }
      }

    });
  }

  /**
   * Update grand total of continuous frames
   * @param index current index
   * @param addValue value to be added
   * @param affectedFrameCount frames that needs to be updated
   */
  calculateFramesGrandTotal(index: number, addValue: number, affectedFrameCount: number) {
    for (let i = 0; i < affectedFrameCount; i++) {
      this.frames[index + i].grandTotal = this.frames[index + i].grandTotal + addValue;
    }
  }

  /**
   * Update current frame's grand total by adding roll 1 and 2
   */
  updateCurrentFrameScore() {
    const currentFrameScore = this.frames[this.frameCount].rollOne + this.frames[this.frameCount].rollTwo;
    this.frames[this.frameCount].grandTotal = this.frameCount ? (this.frames[this.frameCount - 1].grandTotal + currentFrameScore) : currentFrameScore;
  }

  /**
   * Create buttons representing pins
   */
  createRollButtons() {
    this.buttons = []
    let i = 0;
    while (i < this.maxFrameScore - 1) {
      i++
      const obj = {
        value: i,
        disabled: false
      }
      this.buttons.push(obj);
    }
  }

  /**
   * To reset game
   */
  newGame() {
    this.frames = [];
    this.currentFrame = 0;
    this.frameCount = 0;
    this.totalScore = 0;
    this.enableSpar = false;
    this.buttons = [];
    this.gameFinished = false;
    this.createRollButtons();
  }

  /**
   * End the game
   */
  endGame() {
    this.totalScore = this.frames[this.lastFrame].grandTotal;
    this.gameFinished = true;
  }
  
}

