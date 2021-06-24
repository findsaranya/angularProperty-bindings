import { Component,
         OnInit,
         Input,
         ViewEncapsulation,
         OnChanges, 
        SimpleChanges,
        DoCheck,
        AfterContentChecked,
        AfterContentInit,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy,
        ViewChild,
        ElementRef,
        ContentChild
       } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,
OnChanges,DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
@Input('srvElement')element:{type:string,name:string,content:string};
@Input() name:string;
@ViewChild('headertitle',{static:true}) header:ElementRef;
@ContentChild('contentPara',{static:true}) paraEle : ElementRef;
  constructor() {
    console.log("constructor called");
   }
  ngOnChanges(changes:SimpleChanges){
    console.log( changes);
  }
  ngOnInit(): void {
    console.log("ngoninit called!!");
    console.log("header content :",this.header.nativeElement.textContent);
      console.log("para content :",this.paraEle.nativeElement.textContent);
  }
 ngDoCheck(){
   console.log("ngdocheck called!!");
 }
 ngAfterContentInit(){
   console.log("agaftercontent init.");
    console.log("para content :",this.paraEle.nativeElement.textContent);
 }
 ngAfterContentChecked(){
   console.log("ngAfterContentChecked called");
 }
 ngAfterViewChecked(){
   console.log("agafterview init.");
 }
 ngAfterViewInit(){
   console.log("agafterviewchecked.");
   console.log("header content :",this.header.nativeElement.textContent);
 }
 ngOnDestroy(){
   console.log("ngondestroy called")
 }
}