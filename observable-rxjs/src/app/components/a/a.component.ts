import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
  data: any;
  constructor(private _router: Router, private _service: CommonService) { }

  ngOnInit(): void {
    this._service.currentdata.subscribe(data => this.data = data);
  }
  changeData(){
    this._service.changedata({name: 'Eric Cantoment'});
    this._router.navigate(['/b']);
  }
}
