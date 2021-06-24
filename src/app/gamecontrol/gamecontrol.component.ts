import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
 @Output('start')startGame=new EventEmitter<number>();
 @Output('pause') pauseGame = new EventEmitter<number>();
 interval;
 lastIndex:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onStartGame(){
    this.interval = setInterval(() => {
      this.startGame.emit(this.lastIndex+1);
      this.lastIndex++;
    },3000)
  }
  onPauseGame(){
     //this.pauseGame.emit(clearInterval(this.interval));
     clearInterval(this.interval)
     
  }

}
