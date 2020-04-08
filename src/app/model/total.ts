import { CurrencyTypeISO4217 } from '../enum/currency-type.enum';
import { Surcharge } from './surcharge';

export class Total {
    currencyType : CurrencyTypeISO4217;
    discount : number;
    freightRate : number;
    freightAmount : number;    
    subTotal : number;
    surcharges : Surcharge[];
    gstRate : number;
    gstAmount : number;    
    grandTotal : number;
}
