import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStoreService } from '../data/data-store.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
    public searchTerm: string;
    public searching: boolean = false;
    public itemList: any[];
    public filterParam: string = '';
    private listSubscription: Subscription;

    private debounceTimer: ReturnType<typeof setTimeout> = null;

    constructor(private dataStoreService: DataStoreService) {}

    ngOnInit(): void {
        this.listSubscription = this.dataStoreService.userData.subscribe(
            (list) => {
                this.itemList = list;
            }
        );
    }

    listIconSelector(className: string) {
        let icon: string;
        switch (className) {
            case 'note':
                icon = 'note_add';
                break;

            case 'cred':
                icon = 'fingerprint';
                break;

            case 'document':
                icon = 'upload_file';
                break;
        }
        return icon;
    }

    ngOnDestroy(): void {
        this.listSubscription.unsubscribe();
    }

    onItemSelected(): void {
        console.log('Clicked search item!');
    }

    onSearchTermChanged(newValue: string) {
        if (this.debounceTimer) clearTimeout(this.debounceTimer);
        this.searching = true;
        this.debounceTimer = setTimeout(() => {
            this.searching = false;
            this.filterParam = newValue;
            console.log(newValue);
        }, 500);
    }
}
