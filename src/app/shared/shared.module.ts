import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DateTransformPipe } from './pipes/dateTransform.pipe';
import { ListSortPipe } from './pipes/listSort.pipe';
import { FilterPipe } from './pipes/sort.pipe';

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        DateTransformPipe,
        DateTransformPipe,
        ListSortPipe,
        FilterPipe,
    ],
    imports: [CommonModule],
    exports: [
        LoadingSpinnerComponent,
        DateTransformPipe,
        CommonModule,
        DateTransformPipe,
        ListSortPipe,
        FilterPipe,
    ],
})
export class SharedModule {}
