import { Component, OnInit, Input } from '@angular/core';
import { LineItem } from '../model/line-item';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LineItemType } from '../enum/line-item-type.enum';
import { SubItem } from '../model/sub-item';

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


  addSubRow() {
    let subItem = new SubItem();
    subItem.accountCode = '1000-01';
    subItem.costPrice = 2.33;
    subItem.costPriceAmount = 2330;
    subItem.data = {};
    subItem.description = 'Embroidery 1 position up to 10000 stitches';
    subItem.itemCode = 'EMB00001';
    subItem.itemCustomise;
    subItem.markUpPercentage = 10;
    subItem.markUpRate = 1.1;
    subItem.orderSequence = 1;
    subItem.quantity = 1000;
    subItem.sellPrice = 2.563;
    subItem.sellPriceAmount = 2563;
    subItem.type = LineItemType.DECORATION;
    subItem.uuid = '';

    this.lineItem.subItems.push(subItem);
  }
  

}
