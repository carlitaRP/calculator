import { Component, OnInit } from '@angular/core';
import { addition } from "../addition/addition"
import { substraction } from '../substraction/substraction';
import { multiplication } from '../multiplication/multiplication';
import { division } from '../division/division';
import { sqrt } from '../sqrt/sqrt';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  result = 0;
  operator1 = null;
  operator2 = null;

  ngOnInit() {
  }

  addition() {
    let myresult = addition(this.operator1, this.operator2);
    this.setResult(myresult);
  }

  substraction() {
    let myresult = substraction(this.operator1, this.operator2);
    this.setResult(myresult);
  }

  multiplication() {
    let myresult = multiplication(this.operator1, this.operator2);
    this.setResult(myresult);
  }

  division() {
    let myresult = division(this.operator1, this.operator2);
    this.setResult(myresult);
  }

  sqrt() {
    let myresult = sqrt(this.operator1);
    this.setResult(myresult);
  }

  clear() {
    this.operator1 = null;
    this.operator2 = null;
    this.result = null;
  }

  private setResult(value: number) {
    this.result = value;
  }
}


