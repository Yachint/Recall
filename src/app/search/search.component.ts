import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    public searchTerm: string;
    public searching: boolean = false;

    private debounceTimer: ReturnType<typeof setTimeout> = null;

    constructor() {}

    ngOnInit(): void {}

    onSearchTermChanged(newValue: string) {
        if (this.debounceTimer) clearTimeout(this.debounceTimer);
        this.searching = true;
        this.debounceTimer = setTimeout(() => {
            this.searching = false;
            console.log(newValue);
        }, 500);
    }
}
