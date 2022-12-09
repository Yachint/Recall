import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatSidenav) sidenav: MatSidenav;
    public loading: boolean = false;
    private loaderSubscription: Subscription;

    constructor(
        private observer: BreakpointObserver,
        private cd: ChangeDetectorRef,
        private loaderService: LoaderService
    ) {}

    ngOnInit(): void {
        this.loaderSubscription = this.loaderService.loading.subscribe(
            (state) => {
                this.loading = state;
            }
        );
    }

    onSideNavBtnClick() {
        if (this.sidenav.mode === 'over') {
            this.sidenav.toggle();
        }

        this.loaderService.setLoading(true);
    }

    ngOnDestroy(): void {
        this.loaderSubscription.unsubscribe();
    }

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
