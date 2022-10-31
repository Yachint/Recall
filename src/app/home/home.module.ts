import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        HomeRoutingModule,
        MatCardModule,
        MatIconModule,
        MatRippleModule,
        MatListModule,
    ],
    providers: [],
})
export class HomeModule {}
