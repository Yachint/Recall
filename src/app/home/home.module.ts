import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { ListViewerComponent } from './list-viewer/list-viewer.component';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';

@NgModule({
    declarations: [HomeComponent, ListViewerComponent, LoadingSpinnerComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatCardModule,
        MatIconModule,
        MatRippleModule,
        MatListModule,
    ],
    providers: [],
})
export class HomeModule {}
