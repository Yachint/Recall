import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
    ],
})
export class MaterialsModule {}
