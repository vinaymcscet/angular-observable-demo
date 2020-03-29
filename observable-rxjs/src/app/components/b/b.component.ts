import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  data: any;
  constructor(private _router: Router, private _service: CommonService) { }

  ngOnInit(): void {
    this._service.currentdata.subscribe(data => this.data = data);
  }
  changeData(){
    this._service.changedata({name: 'Romario Varia'});
    this._router.navigate(['/a']);
  }
}
