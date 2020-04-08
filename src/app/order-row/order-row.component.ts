import { Component, OnInit, Input } from '@angular/core';
import { LineItem } from '../model/line-item';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-row',
  templateUrl: './order-row.component.html',
  styleUrls: ['./order-row.component.scss']
})
export class OrderRowComponent implements OnInit {
  orderMianItemFormGroup: FormGroup;
  @Input() lineItem : LineItem;
  rowNumber : number;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() { }

  ngOnInit(): void {
   this.rowNumber = this.lineItem.orderSequence;
   this.createForm();
  }

  createForm() {
    this.orderMianItemFormGroup = new FormGroup(
      {
        mainItem: new FormControl('',Validators.required),        
        description: new FormControl('',[Validators.required]),
        account: new FormControl('',Validators.required),
        quantity: new FormControl('',Validators.required),
        costPrice: new FormControl('',Validators.required),
        markupRate: new FormControl('',Validators.required),
        sellPrice: new FormControl('',Validators.required),
        lineAmount: new FormControl('',Validators.required),
        
      },
      
    );
  }
  

}
