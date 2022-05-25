import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(price1: number,price2: number, single: number, double: number, start:Date, end:Date): number {
    // var p1:number=Number(price1);
    // var p2:number=Number(price2);
    // console.log(price1);
    var single_price:number=price1*single;
    var double_price:number=price2*double;
    
    var startDate = new Date(start);
    var endDate = new Date(end);
    
    var Time = endDate.getTime() - startDate.getTime();
    var Days:number= Time / (1000 * 3600 * 24);
    console.log(Days)
    // if(Days==0)
    Days+=1
    var total:number=single_price+double_price;
    console.log(total);
    return total*Days;
  }

}
