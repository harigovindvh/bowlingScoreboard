import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bowling-scoreboard',
  templateUrl: './bowling-scoreboard.component.html',
  styleUrls: ['./bowling-scoreboard.component.scss']
})
export class BowlingScoreboardComponent implements OnInit {

  frames :any = [];
  currentFrame = 0;
  frameCount: number = 0;
  enableSpar: boolean = false;
  buttons: any = [];
  gameFinished: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.createRollButtons();
  }

  rollPin(count : any) {

    if(typeof(count) === 'number') {
      if(!this.frames[this.frameCount]) {
        this.frames[this.frameCount]= {};
      }
      if(this.frames[this.frameCount].rollOne === undefined) {
        this.frames[this.frameCount].rollOne = count
        this.restrictRolls(true, count);
        this.enableSpar = true;
      } else {
        if(this.frames[this.frameCount].rollTwo === undefined) {
          this.enableSpar = this.frameCount === 9;
          this.frames[this.frameCount].rollTwo = count
          const currentFrameScore = this.frames[this.frameCount].rollOne + this.frames[this.frameCount].rollTwo;
          this.frames[this.frameCount].grandTotal = this.frameCount? (this.frames[this.frameCount-1].grandTotal + currentFrameScore) : currentFrameScore;
          this.gameFinished = this.frameCount === 9
          this.restrictRolls(this.frameCount === 9, count);
          this.checkSparPendingReward();
          this.checkStrikePendingReward();
         } else {
          if(this.frameCount === 9) {
            this.frames[this.frameCount].rollThree = count
            this.frames[this.frameCount].grandTotal = this.frames[this.frameCount].grandTotal + count;
            this.gameFinished = true;
            this.checkSparPendingReward();
            this.checkStrikePendingReward();
           }
         }
         if(this.frameCount !== 9) {
          this.frameCount++
         }
      }
    }


    if(count === '/') {
      this.restrictRolls(false);
      this.enableSpar = false;
      this.frames[this.frameCount].isSpare = true;
      this.frames[this.frameCount].sparPendingReward = 1;
      if (this.frames[this.frameCount].rollTwo === undefined) {
        this.frames[this.frameCount].rollTwo = 10 - this.frames[this.frameCount].rollOne;
        const currentFrameScore = this.frames[this.frameCount].rollOne + this.frames[this.frameCount].rollTwo;
        this.frames[this.frameCount].grandTotal = this.frameCount? (this.frames[this.frameCount-1].grandTotal + currentFrameScore) : currentFrameScore 
        this.checkStrikePendingReward();
      } else {
        this.frames[this.frameCount].rollThree = 10 - this.frames[this.frameCount].rollTwo;
        this.frames[this.frameCount].grandTotal = this.frames[this.frameCount].grandTotal + this.frames[this.frameCount].rollThree
        this.gameFinished = true;
      }

      if(this.frameCount !== 9) {
        this.frameCount++
       }
     }


     if(count === 'X') {
      if(!this.frames[this.frameCount]) {
        this.frames[this.frameCount]= {};
      }
      this.enableSpar = false;
      this.frames[this.frameCount].isStrike = true;
      if(this.frameCount === 9) {
       this.calculateFrameTenStrike()
      } else {
        this.frames[this.frameCount].strikePendingReward = 2;
        this.frames[this.frameCount].grandTotal = this.frameCount? (this.frames[this.frameCount-1].grandTotal + 10) : 10 
        this.checkSparPendingReward();
        this.checkStrikePendingReward();
        this.frameCount++
      } 
     }
  }

  
  calculateFrameTenStrike() {
    const frameTen = this.frames[this.frameCount];
    if(frameTen.rollOne === undefined) {
      this.frames[this.frameCount].rollOne = 10;
      this.frames[this.frameCount].grandTotal = this.frames[this.frameCount - 1].grandTotal + frameTen.rollOne
    } else
    if(frameTen.rollTwo === undefined) {
      this.frames[this.frameCount].rollTwo = 10;
      this.frames[this.frameCount].grandTotal = this.frames[this.frameCount].grandTotal + frameTen.rollTwo
    } else {
      this.frames[this.frameCount].rollThree = 10;
      this.frames[this.frameCount].grandTotal = this.frames[this.frameCount].grandTotal + frameTen.rollThree;
      this.gameFinished = true;
    }
    this.checkSparPendingReward();
    this.checkStrikePendingReward();
  }


  restrictRolls(isRestriction: boolean, value? : number) {
    if(isRestriction) {
      const rollOneValue = value;
      this.buttons.forEach((button :any) => {
        if((button.value + rollOneValue) > 9) {
          button.disabled = true;
        }
      });
      return;
    }
    this.buttons.forEach((button :any) => {
        button.disabled = false;
    });
  }
  checkSparPendingReward() {
    this.frames.forEach((frame: any, index: number) => {
      if(frame && frame.sparPendingReward) {
        if(this.frames[index+1]?.isStrike) {
          frame.grandTotal = frame.grandTotal + 10;
          this.frames[index+1].grandTotal = this.frames[index+1].grandTotal + 10;
          frame.sparPendingReward = 0;
        } else
        if(this.frames[index+1]?.rollOne >= 0) {
          frame.grandTotal = frame.grandTotal + this.frames[index+1].rollOne;
          this.frames[index+1].grandTotal = this.frames[index+1].grandTotal + this.frames[index+1].rollOne;
          frame.sparPendingReward = 0;
        }
      }
      
    });
  }
  checkStrikePendingReward() {
    this.frames.forEach((frame: any, index: number) => {
      if(frame && frame.strikePendingReward === 2) {
        if(this.frames[index+1]?.isStrike) {
          frame.grandTotal = frame.grandTotal + 10;
          this.frames[index+1].grandTotal = this.frames[index+1].grandTotal + 10;
          frame.strikePendingReward = 1;
        } else
        if(this.frames[index+1]?.rollOne >= 0) {
          frame.grandTotal = frame.grandTotal + this.frames[index+1].rollOne;
          this.frames[index+1].grandTotal = this.frames[index+1].grandTotal + this.frames[index+1].rollOne;
          frame.strikePendingReward = 1;
        }
      }

      if(frame && frame.strikePendingReward === 1) {
        if(this.frames[index+1]?.rollTwo >= 0) {
          frame.grandTotal = frame.grandTotal + this.frames[index+1].rollTwo;
          this.frames[index+1].grandTotal = this.frames[index+1].grandTotal + this.frames[index+1].rollTwo;
          frame.strikePendingReward = 0;
        } else
        if(this.frames[index+2]?.isStrike) {
          frame.grandTotal = frame.grandTotal + 10;
          this.frames[index+1].grandTotal = this.frames[index+1].grandTotal + 10;
          this.frames[index+2].grandTotal = this.frames[index+2].grandTotal + 10;
          frame.strikePendingReward = 0;
        } else
        if(this.frames[index+2]?.rollOne >= 0) {
          frame.grandTotal = frame.grandTotal + this.frames[index+2].rollOne;
          this.frames[index+1].grandTotal = this.frames[index+1].grandTotal + this.frames[index+2].rollOne;
          this.frames[index+2].grandTotal = this.frames[index+2].grandTotal + this.frames[index+2].rollOne;
          frame.strikePendingReward = 0;
        }

      }
      
    });
  }

  newGame() {
    this.frames = [];
    this.currentFrame = 0;
    this.frameCount = 0;
    this.enableSpar = false;
    this.buttons = [];
    this.gameFinished = false;
    this.createRollButtons();
  }

  createRollButtons() {
    this.buttons = []
    let i = 0;
    while(i< 9) {
      i++
      const obj = {
        value : i,
        disabled: false
      }
      this.buttons.push(obj);
    }
  }

}

