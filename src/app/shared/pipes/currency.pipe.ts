import { _isNumberValue } from '@angular/cdk/coercion';
import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Pipe({ name: 'customCurrency' })
export class CustomCurrencyPipe implements PipeTransform {
  currencySelected:any = null;
  constructor(){
  }
  toCommas(value:any) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  transform(value: any): any {
    if(this.currencySelected == '$'){
      return `${this.currencySelected}${this.toCommas((value/environment.ngusdrate).toFixed(3))}`;
    }
    return `${this.currencySelected}${this.toCommas(value.toFixed(2))}`;
  }

}
