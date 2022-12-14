import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { ListViewerComponent } from './list-viewer/list-viewer.component';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ItemViewerComponent } from './item-viewer/item-viewer.component';

@NgModule({
    declarations: [HomeComponent, ListViewerComponent, ItemViewerComponent],
    imports: [
        HomeRoutingModule,
        MatCardModule,
        MatIconModule,
        MatRippleModule,
        MatListModule,
        MatSelectModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatButtonModule,
        SharedModule,
    ],
    providers: [],
})
export class HomeModule {}
