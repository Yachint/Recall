import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './navigation/main-menu/main-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialsModule } from './materials/materials.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent, MainMenuComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialsModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
