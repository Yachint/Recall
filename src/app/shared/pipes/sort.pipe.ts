import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(value: any[], filterParam: string, classType: string) {
        if (!classType && filterParam === '') return value;

        if (classType && filterParam === '') {
            return value.filter((item) => item.class === classType);
        }

        let tempValue = value.filter((item) =>
            item.name.toLowerCase().includes(filterParam.toLowerCase())
        );

        return tempValue;
    }
}
