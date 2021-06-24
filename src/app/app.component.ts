import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'eventsbinding';
 serverElements = [{type:"server",name:"server 2",content:"Just added"}];
 count:number;
 countArr:number[] = [];
onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  
onChangesbtn(){
  // console.log("clicked");
  this.serverElements[0].name="Changed!!";

}
onDestroy(){
  this.serverElements.splice(0,1);
}
onStart(count:number){
  console.log(count);
  this.countArr.push(count);
}
onPause(){

}
}
