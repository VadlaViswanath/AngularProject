import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any): any {
    
    // if(!args){
    //   return value;
    // }

    // return value.filter(items=>{
    //     return items.title.startWith(args)==true;
    // })

    var datePipe = new DatePipe("en-US");
        value = datePipe.transform(value, 'mm/dd/yyyy');
        return value;
  }

}
