import { Component, OnInit } from '@angular/core';
import { LineItem } from '../model/line-item';
import { MainItem } from '../model/main-item';
import { LineItemType } from '../enum/line-item-type.enum';
import { SubItem } from '../model/sub-item';

@Component({
  selector: 'app-order-object',
  templateUrl: './order-object.component.html',
  styleUrls: ['./order-object.component.scss']
})
export class OrderObjectComponent implements OnInit {

  orderRows : LineItem[];
  

  constructor() { }

  ngOnInit(): void {
    this.orderRows = [];
    

  }

  addNewRow() {
    let mainItem = new MainItem();
    mainItem.accountCode = '1000-01';
    mainItem.costPrice = 12.5;
    mainItem.costPriceAmount = 12500;
    mainItem.data = {};
    mainItem.description = 'Man Polo T-Shirt';
    mainItem.itemCode = 'BIZ00001';
    mainItem.itemCustomise;
    mainItem.markUpPercentage = 10;
    mainItem.markUpRate = 1.1;
    mainItem.orderSequence = 1;
    mainItem.quantity = 1000;
    mainItem.sellPrice = 13.75;
    mainItem.sellPriceAmount = 13750;
    mainItem.type = LineItemType.MAIN;
    mainItem.uuid = '';

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

    let lineItem = new LineItem();
    lineItem.uuid = '';
    lineItem.orderSequence = 1;
    lineItem.mainItem = mainItem;
    lineItem.subItems = [subItem];
    

    this.orderRows.push(lineItem);
  }

}
