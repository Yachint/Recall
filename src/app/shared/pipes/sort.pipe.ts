import { Pipe, PipeTransform } from '@angular/core';
import Fuse from 'fuse.js';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(value: any[], filterParam: string, classType: string) {
        if (!classType && filterParam === '') return value;

        if (classType && filterParam === '') {
            return value.filter((item) => item.class === classType);
        }

        // let tempValue = value.filter((item) =>
        //     item.name.toLowerCase().includes(filterParam.toLowerCase())
        // );

        const fuse = new Fuse(value, {
            keys: ['name'],
        });

        let tempValue = fuse.search(filterParam).map((res) => res.item);

        return tempValue;
    }
}
