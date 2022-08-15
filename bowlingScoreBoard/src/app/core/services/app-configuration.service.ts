import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigurationService {

  constructor() { }
  
  bowlingGameConfig = {
    lastFrame: 9,
    maxScore :10,

  }
}
