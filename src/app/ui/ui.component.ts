import { Component, OnInit } from '@angular/core';
import { addition } from '../addition/addition';
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

  result: number | null = 0;
  operator1: number | null = null;
  operator2: number | null = null;

  ngOnInit() {
  }

  performOperation(operation: () => number): void {
    if (this.operator1 !== null && this.operator2 !== null) {
      const myResult = operation();
      this.setResult(myResult);
    }
  }

  addition() {
    this.performOperation(() => addition(this.operator1, this.operator2));
  }

  substraction() {
    this.performOperation(() => substraction(this.operator1, this.operator2));
  }

  multiplication() {
    this.performOperation(() => multiplication(this.operator1, this.operator2));
  }

  division() {
    this.performOperation(() => division(this.operator1, this.operator2));
  }

  sqrt() {
    if (this.operator1 !== null) {
      const myResult = sqrt(this.operator1);
      this.setResult(myResult);
    }
  }

  clear() {
    this.operator1 = null;
    this.operator2 = null;
    this.result = null;
  }

  private setResult(value: number): void {
    this.result = value;
  }
}
