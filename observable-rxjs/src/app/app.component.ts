import { Component, OnInit, AfterViewInit } from '@angular/core';
import { timer, of, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  source: any;
  print: any;
  subscribe: any;
  constructor(){
  }
  ngOnInit(){
    this.callObserver();
    this.ofinstanceobserver();
  }

  callObserver(){
    this.source = timer(1000, 2000);
    this.subscribe =  this.source.subscribe( val =>{
      console.log(val);      
    })
    setTimeout(() => {
      this.subscribe.unsubscribe();
    }, 10000);
  }

  ofinstanceobserver(){
    const observe = of('apple', 'orange', 'grape');
    const newobserver = {
      next: (x: string) => console.log("Observer got a next value " + x),
      error: (err: string) => console.log("Observer got an error " + err),
      complete: () => console.log("Observer got complete Notification")
    }
    observe.subscribe(newobserver);
  }

  fromEvent(target: HTMLInputElement, eventname: string){
    return new Observable((observer)=>{
      const handler = (e: any) =>observer.next(e);
      target.addEventListener(eventname, handler);
      return()=>{
        target.removeEventListener(eventname, handler);
      }
    })
  }
  ngAfterViewInit(){
    const ESC_KEY = 27;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    this.fromEvent(nameInput, 'keydown').subscribe((e: KeyboardEvent) => {
      if(e.keyCode == ESC_KEY){
        nameInput.value = '';
      }
    })
  }
}
