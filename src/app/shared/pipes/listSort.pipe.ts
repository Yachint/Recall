import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'listSort',
})
export class ListSortPipe implements PipeTransform {
    transform(value: any[], sortParam: string, order: string = 'DESC') {
        // DON'T use temp array as it will be difficult to access actual index
        // after pipe. Only if you modify the original array, you will be able
        // to do calculation with indexes as ngFor does not support index of tempArray
        // returned after pipe!
        // let tempArr = [...value];

        value.sort((a, b) => {
            let A, B;
            if (sortParam === 'createdAt' || sortParam === 'updatedAt') {
                A = new Date(a[sortParam]).getTime();
                B = new Date(b[sortParam]).getTime();

                if (order === 'DESC') return A > B ? -1 : 1;
                return A < B ? -1 : 1;
            }

            A = a[sortParam];
            B = b[sortParam];
            if (order === 'DESC') return A > B ? -1 : 1;
            return A < B ? -1 : 1;
        });

        return value;
    }
}
