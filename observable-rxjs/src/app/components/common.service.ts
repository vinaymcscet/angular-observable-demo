import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private datasource = new BehaviorSubject({name: 'Maradona'});
  constructor() { }
  currentdata = this.datasource.asObservable();
  changedata(data: any){
    this.datasource.next(data);
  }
  
}
