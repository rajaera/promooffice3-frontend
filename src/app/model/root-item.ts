import { LineItemType } from '../enum/line-item-type.enum';
import { ItemCustomise } from './item-customsise';

export class RootItem {
    uuid : string;
    orderSequence : number;
    type : LineItemType;
    itemCustomise : ItemCustomise;
    itemCode : string;
    description : string;
    accountCode : string;
    quantity : number;
    costPrice : number;
    markUpRate : number;
    markUpPercentage : number;
    sellPrice : number;
    costPriceAmount : number;
    sellPriceAmount : number;
    data : any;
}
