import { Component, OnInit } from '@angular/core';
import { OrderSteps } from '../enum/order-steps.enum';

@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.scss']
})
export class OrderComponentComponent implements OnInit {
  currentOrderStep : number;
  constructor() { }

  ngOnInit(): void {
    this.currentOrderStep = OrderSteps.QUOTATION;
  }

}
