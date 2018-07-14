import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  departments=[
    { value: 100, viewValue: '' },
    { value: 101, viewValue: '問い合わせ種別１' },
    { value: 102, viewValue: '問い合わせ種別２' }
  ]
}
