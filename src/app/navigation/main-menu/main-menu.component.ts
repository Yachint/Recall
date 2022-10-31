import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements AfterViewInit {
    @ViewChild(MatSidenav) sidenav: MatSidenav;

    constructor(
        private observer: BreakpointObserver,
        private cd: ChangeDetectorRef
    ) {}

    ngAfterViewInit(): void {
        this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
            if (res.matches) {
                this.sidenav.mode = 'over';
                this.sidenav.close();
            } else {
                this.sidenav.mode = 'side';
                this.sidenav.open();
            }
        });
        this.cd.detectChanges();
    }
}
