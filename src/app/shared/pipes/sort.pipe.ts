import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(value: any[], filterParam: string) {
        if (filterParam === '') return value;

        let tempValue = value.filter((item) =>
            item.name.toLowerCase().includes(filterParam.toLowerCase())
        );

        return tempValue;
    }
}
