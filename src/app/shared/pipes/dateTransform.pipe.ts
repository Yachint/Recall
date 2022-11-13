import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateTransform',
})
export class DateTransformPipe implements PipeTransform {
    transform(dateString: string, type: string = 'full') {
        const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
        if (type === 'month')
            return new Date(dateString).toLocaleDateString('en-US', {
                month: 'long',
            });
        return new Date(dateString).toLocaleDateString('en-US', options);
    }
}
