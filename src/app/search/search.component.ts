import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MatChipListbox } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStoreService } from '../data/data-store.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy, AfterViewInit {
    public searchTerm: string;
    public searching: boolean = false;
    public itemList: any[];
    public filterParam: string = '';
    public nullVal: any = '';
    private listSubscription: Subscription;
    private chipSubscription: Subscription;
    public chipValue: string;
    @ViewChild('chip') chip: MatChipListbox;
    private debounceTimer: ReturnType<typeof setTimeout> = null;

    constructor(
        private dataStoreService: DataStoreService,
        private route: ActivatedRoute,
        private cd: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.listSubscription = this.dataStoreService.userData.subscribe(
            (list) => {
                this.itemList = list;
            }
        );

        if (this.route.snapshot.params['mode'] !== undefined) {
            this.chipValue = this.route.snapshot.params['mode'];
        }
    }

    ngAfterViewInit(): void {
        this.chipSubscription = this.chip.change.subscribe((val) => {
            this.chipValue = val.value;
        });

        if (this.chipValue !== undefined) {
            this.chip.value = this.chipValue;
            this.cd.detectChanges();
        }
    }

    listIconSelector(className: string) {
        let icon: string;
        switch (className) {
            case 'note':
                icon = 'snippet_folder';
                break;

            case 'cred':
                icon = 'password';
                break;

            case 'document':
                icon = 'inventory';
                break;
        }
        return icon;
    }

    ngOnDestroy(): void {
        this.listSubscription.unsubscribe();
        this.chipSubscription.unsubscribe();
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
