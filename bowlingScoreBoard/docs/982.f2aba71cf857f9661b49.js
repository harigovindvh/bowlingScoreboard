"use strict";(self.webpackChunkbowling_score_board=self.webpackChunkbowling_score_board||[]).push([[982],{982:(A,d,s)=>{s.r(d),s.d(d,{BowlingScoreboardModule:()=>R});var c=s(583),f=s(353),t=s(639);let u=(()=>{class r{constructor(){this.bowlingGameConfig={lastFrame:9,maxScore:10}}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function g(r,n){if(1&r&&(t.TgZ(0,"div"),t.TgZ(1,"ul",16),t.TgZ(2,"li",17),t._uU(3),t.qZA(),t.TgZ(4,"li",17),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&r){const e=t.oxw(2).$implicit;t.xp6(3),t.hij("Roll 1: ",e.rollOne,""),t.xp6(2),t.hij("Roll 2: ",e.isSpare?"/":e.rollTwo,"")}}function p(r,n){1&r&&(t.TgZ(0,"ul",16),t.TgZ(1,"li",17),t._uU(2,"X"),t.qZA(),t.qZA())}function _(r,n){if(1&r&&(t.TgZ(0,"div",11),t.TgZ(1,"div",12),t._uU(2),t.qZA(),t.YNc(3,g,6,2,"div",13),t.YNc(4,p,3,0,"ng-template",null,14,t.W1O),t.TgZ(6,"div",15),t._uU(7),t.qZA(),t.qZA()),2&r){const e=t.MAs(5),i=t.oxw(),o=i.index,a=i.$implicit;t.xp6(2),t.hij("Frame ",o+1,""),t.xp6(1),t.Q6J("ngIf",!a.isStrike)("ngIfElse",e),t.xp6(4),t.hij(" Total : ",a.grandTotal," ")}}function b(r,n){if(1&r&&(t.TgZ(0,"div",11),t.TgZ(1,"div",12),t._uU(2),t.qZA(),t.TgZ(3,"div"),t.TgZ(4,"ul",16),t.TgZ(5,"li",17),t._uU(6),t.qZA(),t.TgZ(7,"li",17),t._uU(8),t.qZA(),t.TgZ(9,"li",17),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",15),t._uU(12),t.qZA(),t.qZA()),2&r){const e=t.oxw(),i=e.index,o=e.$implicit;t.xp6(2),t.hij("Frame ",i+1,""),t.xp6(4),t.hij("Roll 1: ",10===o.rollOne?"X":o.rollOne,""),t.xp6(2),t.hij("Roll 2: ",10===o.rollTwo?"X":o.rollOne+o.rollTwo===10?"/":o.rollTwo,""),t.xp6(2),t.hij("Roll 3: ",10===o.rollThree?"X":o.rollTwo+o.rollThree===10?"/":o.rollThree,""),t.xp6(2),t.hij(" Total : ",o.grandTotal," ")}}function T(r,n){if(1&r&&(t.TgZ(0,"div",8),t.YNc(1,_,8,4,"div",9),t.YNc(2,b,13,5,"ng-template",null,10,t.W1O),t.qZA()),2&r){const e=n.index,i=t.MAs(3);t.xp6(1),t.Q6J("ngIf",9!==e)("ngIfElse",i)}}function w(r,n){if(1&r&&(t.TgZ(0,"div",6),t.YNc(1,T,4,2,"div",7),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.frames)}}function C(r,n){1&r&&(t.TgZ(0,"div",18),t.TgZ(1,"h5"),t._uU(2,"Roll Pins to Start"),t.qZA(),t._UZ(3,"img",19),t.qZA())}function S(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).rollPin(a.value)}),t._uU(1),t.qZA()}if(2&r){const e=n.$implicit;t.Q6J("disabled",e.disabled),t.xp6(1),t.Oqu(e.value)}}function v(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"div",20),t.TgZ(1,"span"),t._uU(2,"Pins Hit:"),t.qZA(),t.TgZ(3,"button",21),t.NdJ("click",function(){return t.CHM(e),t.oxw().rollPin(0)}),t._uU(4,"Gutter"),t.qZA(),t.YNc(5,S,2,2,"button",22),t.TgZ(6,"button",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().rollPin("/")}),t._uU(7,"/"),t.qZA(),t.TgZ(8,"button",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().rollPin("X")}),t._uU(9,"X"),t.qZA(),t.qZA()}if(2&r){const e=t.oxw();t.xp6(5),t.Q6J("ngForOf",e.buttons),t.xp6(1),t.Q6J("disabled",!e.enableSpar),t.xp6(2),t.Q6J("disabled",e.enableSpar)}}function x(r,n){if(1&r&&(t.TgZ(0,"div",20),t.TgZ(1,"strong"),t._uU(2),t.qZA(),t.qZA()),2&r){const e=t.oxw();t.xp6(2),t.hij("Total Score: ",e.totalScore,"")}}function Z(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){return t.CHM(e),t.oxw().newGame()}),t._uU(1,"New Game"),t.qZA()}}const F=[{path:"",component:(()=>{class r{constructor(e){this._appConfigurationService=e,this.frames=[],this.currentFrame=0,this.frameCount=0,this.enableSpar=!1,this.buttons=[],this.gameFinished=!1,this.totalScore=0,this.lastFrame=e.bowlingGameConfig.lastFrame,this.maxFrameScore=e.bowlingGameConfig.maxScore}ngOnInit(){this.createRollButtons()}rollPin(e){if("number"==typeof e)this.processRoll(e);else switch(e){case"/":this.processSpare();break;case"X":this.processStrike()}}processRoll(e){this.frames[this.frameCount]||(this.frames[this.frameCount]={}),void 0===this.frames[this.frameCount].rollOne?(this.frames[this.frameCount].rollOne=e,this.restrictRolls(!0,e),this.enableSpar=!0):(void 0===this.frames[this.frameCount].rollTwo?(this.enableSpar=this.frameCount===this.lastFrame,this.frames[this.frameCount].rollTwo=e,this.updateCurrentFrameScore(),this.restrictRolls(this.frameCount===this.lastFrame,e),this.checkSparPendingReward(),this.checkStrikePendingReward(),this.frameCount===this.lastFrame&&this.frames[this.lastFrame].rollOne!==this.maxFrameScore&&this.endGame()):this.frameCount===this.lastFrame&&(this.frames[this.frameCount].rollThree=e,this.frames[this.frameCount].grandTotal=this.frames[this.frameCount].grandTotal+e,this.checkSparPendingReward(),this.checkStrikePendingReward(),this.endGame()),this.frameCount!==this.lastFrame&&this.frameCount++)}processSpare(){this.restrictRolls(!1),this.enableSpar=!1,this.frames[this.frameCount].isSpare=!0,this.frames[this.frameCount].sparPendingReward=1,void 0===this.frames[this.frameCount].rollTwo?(this.frames[this.frameCount].rollTwo=this.maxFrameScore-this.frames[this.frameCount].rollOne,this.updateCurrentFrameScore(),this.checkSparPendingReward(),this.checkStrikePendingReward()):(this.frames[this.frameCount].rollThree=this.maxFrameScore-this.frames[this.frameCount].rollTwo,this.frames[this.frameCount].grandTotal=this.frames[this.frameCount].grandTotal+this.frames[this.frameCount].rollThree,this.endGame()),this.frameCount!==this.lastFrame&&this.frameCount++}processStrike(){this.frames[this.frameCount]||(this.frames[this.frameCount]={}),this.enableSpar=!1,this.frames[this.frameCount].isStrike=!0,this.frameCount===this.lastFrame?this.calculateFrameTenStrike():(this.frames[this.frameCount].strikePendingReward=2,this.frames[this.frameCount].grandTotal=this.frameCount?this.frames[this.frameCount-1].grandTotal+this.maxFrameScore:this.maxFrameScore,this.checkSparPendingReward(),this.checkStrikePendingReward(),this.frameCount++)}calculateFrameTenStrike(){const e=this.frames[this.frameCount];void 0===e.rollOne?(this.frames[this.frameCount].rollOne=this.maxFrameScore,this.frames[this.frameCount].grandTotal=this.frames[this.frameCount-1].grandTotal+e.rollOne):void 0===e.rollTwo?(this.frames[this.frameCount].rollTwo=this.maxFrameScore,this.frames[this.frameCount].grandTotal=this.frames[this.frameCount].grandTotal+e.rollTwo):(this.frames[this.frameCount].rollThree=this.maxFrameScore,this.frames[this.frameCount].grandTotal=this.frames[this.frameCount].grandTotal+e.rollThree,this.endGame()),this.checkSparPendingReward(),this.checkStrikePendingReward()}restrictRolls(e,i){if(e){const o=i;this.buttons.forEach(a=>{a.value+o>this.maxFrameScore-1&&(a.disabled=!0)})}else this.buttons.forEach(o=>{o.disabled=!1})}checkSparPendingReward(){this.frames.forEach((e,i)=>{var o,a;e&&e.sparPendingReward&&((null===(o=this.frames[i+1])||void 0===o?void 0:o.isStrike)?(this.calculateFramesGrandTotal(i,this.maxFrameScore,2),e.sparPendingReward=0):(null===(a=this.frames[i+1])||void 0===a?void 0:a.rollOne)>=0&&(this.calculateFramesGrandTotal(i,this.frames[i+1].rollOne,2),e.sparPendingReward=0))})}checkStrikePendingReward(){this.frames.forEach((e,i)=>{var o,a,l,m,h;!e||(2===e.strikePendingReward&&((null===(o=this.frames[i+1])||void 0===o?void 0:o.isStrike)?(this.calculateFramesGrandTotal(i,this.maxFrameScore,2),e.strikePendingReward=1):(null===(a=this.frames[i+1])||void 0===a?void 0:a.rollOne)>=0&&(this.calculateFramesGrandTotal(i,this.frames[i+1].rollOne,2),e.strikePendingReward=1)),1===e.strikePendingReward&&((null===(l=this.frames[i+1])||void 0===l?void 0:l.rollTwo)>=0?(this.calculateFramesGrandTotal(i,this.frames[i+1].rollTwo,2),e.strikePendingReward=0):(null===(m=this.frames[i+2])||void 0===m?void 0:m.isStrike)?(this.calculateFramesGrandTotal(i,this.maxFrameScore,3),e.strikePendingReward=0):(null===(h=this.frames[i+2])||void 0===h?void 0:h.rollOne)>=0&&(this.calculateFramesGrandTotal(i,this.frames[i+2].rollOne,3),e.strikePendingReward=0)))})}calculateFramesGrandTotal(e,i,o){for(let a=0;a<o;a++)this.frames[e+a].grandTotal=this.frames[e+a].grandTotal+i}updateCurrentFrameScore(){const e=this.frames[this.frameCount].rollOne+this.frames[this.frameCount].rollTwo;this.frames[this.frameCount].grandTotal=this.frameCount?this.frames[this.frameCount-1].grandTotal+e:e}createRollButtons(){this.buttons=[];let e=0;for(;e<this.maxFrameScore-1;)e++,this.buttons.push({value:e,disabled:!1})}newGame(){this.frames=[],this.currentFrame=0,this.frameCount=0,this.totalScore=0,this.enableSpar=!1,this.buttons=[],this.gameFinished=!1,this.createRollButtons()}endGame(){this.totalScore=this.frames[this.lastFrame].grandTotal,this.gameFinished=!0}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(u))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-bowling-scoreboard"]],decls:7,vars:5,consts:[[1,"container-fluid","card",2,"width","80%"],["class","row align-items-start",4,"ngIf"],["class","center","style","height: 200px;",4,"ngIf"],["id","buttons",1,"p-2","d-flex",2,"clear","left"],["class","center row",4,"ngIf"],["type","button","class","btn btn-primary row center ng-btn",3,"click",4,"ngIf"],[1,"row","align-items-start"],["class","card","style","width:10%; min-height: 260px;",4,"ngFor","ngForOf"],[1,"card",2,"width","10%","min-height","260px"],["class","card-body",4,"ngIf","ngIfElse"],["frameTen",""],[1,"card-body"],[1,"card-title","frame-text"],[4,"ngIf","ngIfElse"],["strikeFrame",""],[1,"card-header","fs-13"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"center",2,"height","200px"],["src","https://images.pexels.com/photos/4192/sport-alley-ball-game.jpg?cs=srgb&dl=pexels-skitterphoto-4192.jpg&fm=jpg","alt","img",1,"rounded","mx-auto","d-block"],[1,"center","row"],["type","button",1,"btn","btn-primary","col",3,"click"],["type","button","class","btn btn-primary col",3,"disabled","click",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary","col",3,"disabled","click"],["type","button",1,"btn","btn-primary","row","center","ng-btn",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,w,2,1,"div",1),t.YNc(2,C,4,0,"div",2),t.TgZ(3,"div",3),t.YNc(4,v,10,3,"div",4),t.YNc(5,x,3,1,"div",4),t.qZA(),t.YNc(6,Z,2,0,"button",5),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",i.frames.length>0),t.xp6(1),t.Q6J("ngIf",0===i.frames.length),t.xp6(2),t.Q6J("ngIf",!i.gameFinished),t.xp6(1),t.Q6J("ngIf",i.gameFinished),t.xp6(1),t.Q6J("ngIf",0!==i.frames.length))},directives:[c.O5,c.sg],styles:[".title[_ngcontent-%COMP%]{text-align:center}.center[_ngcontent-%COMP%]{margin:auto;text-align:center;align-content:center;width:50%;padding:10px}.frame-text[_ngcontent-%COMP%]{border-bottom-style:solid;border-color:#a9a9a9;border-bottom-width:1px}.ng-btn[_ngcontent-%COMP%]{width:20%}img[_ngcontent-%COMP%]{width:200px}ul[_ngcontent-%COMP%]{min-height:125px}.fs-13[_ngcontent-%COMP%]{font-size:13px}"]}),r})()},{path:"**",redirectTo:"BowlingScoreboardComponent"}];let k=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[f.Bz.forChild(F)],f.Bz]}),r})(),R=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[c.ez,k]]}),r})()}}]);