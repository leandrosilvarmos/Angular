import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excheck-box',
  templateUrl: './excheck-box.component.html',
  styleUrls: ['./excheck-box.component.css']
})
export class ExcheckBoxComponent implements OnInit {

tel: boolean;
email: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
