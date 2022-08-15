import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigurationService {

  constructor() { }
  
  /**
   * General configurations for bowling game
   */
  bowlingGameConfig = {
    lastFrame: 9,
    maxScore :10,

  }
}
