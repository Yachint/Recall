import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public isNavRequested: boolean = false;
    public isLoading: boolean = false;

    constructor(private router: Router, private route: ActivatedRoute) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.isNavRequested =
                    this.router.url !== '/home' ? true : false;
            }
        });
    }

    ngOnInit(): void {}

    onFolderSelected(path: string) {
        console.log('Card clicked!', path);
        this.isNavRequested = true;
        this.isLoading = true;
        this.router
            .navigate([`view/${path}`], { relativeTo: this.route })
            .finally(() => {
                this.isLoading = false;
            });
    }

    onCardSelected() {
        console.log('Card clicked!');
    }
}
