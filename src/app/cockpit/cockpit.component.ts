import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srCreated')serverCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated')blueprintCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  @ViewChild('serverContent')serverContent:ElementRef;
  //newServerName = '';
  //newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
onAddServer(serverName:HTMLInputElement){
  console.log(serverName.value);
  console.log(this.serverContent.nativeElement.value);
  this.serverCreated.emit({
    // serverName:this.newServerName,
     serverName:serverName.value,
    // serverContent:this.newServerContent
     serverContent:this.serverContent.nativeElement.value
  });
}
OnAddBlueprint(serverName:HTMLInputElement){
   this.blueprintCreated.emit({
    //serverName:this.newServerName,
     serverName:serverName.value,
    serverContent:this.serverContent.nativeElement.value
    // serverContent:this.newServerContent
  });
}

}
