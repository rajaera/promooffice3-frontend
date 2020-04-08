import { ItemCustomise } from './item-customsise';
import { Total } from './total';
import { SubItem } from './sub-item';
import { MainItem } from './main-item';

export class LineItem {    
    uuid : string;
    orderSequence : number;
    mainItem : MainItem;    
    subItems : SubItem[];
    itemCustomise : ItemCustomise;
    total : Total;
}
