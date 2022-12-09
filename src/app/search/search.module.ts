import { NgModule } from '@angular/core';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [SearchComponent],
    imports: [
        CommonModule,
        SearchRoutingModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatRippleModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatListModule,
        SharedModule,
    ],
    providers: [],
})
export class SearchModule {}
