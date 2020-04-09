import { Component, OnInit, Input } from '@angular/core';
import { SubItem } from '../model/sub-item';

@Component({
  selector: 'app-sub-item-row',
  templateUrl: './sub-item-row.component.html',
  styleUrls: ['./sub-item-row.component.scss']
})
export class SubItemRowComponent implements OnInit {
  @Input() subLineItem : SubItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
