import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStoreService } from 'src/app/data/data-store.service';

@Component({
    selector: 'app-list-viewer',
    templateUrl: './list-viewer.component.html',
    styleUrls: ['./list-viewer.component.scss'],
})
export class ListViewerComponent implements OnInit, OnDestroy {
    public itemList: any[];
    public itemType: string;
    public pageHeader: string;
    public selectedFilter: string = 'createdAt';
    public sortDirection: string = 'DESC';

    private listSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private dataStoreService: DataStoreService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.itemType = params.type;
            // Assigning subscription as soon as the type of page changes
            // can be done outside also, but I guess this is safer
            this.assignSubscription();
        });
    }

    ngOnDestroy(): void {
        this.listSubscription.unsubscribe();
    }

    onNavigateToSearch() {
        this.router.navigate(['/search', this.itemType.slice(0, -1)]);
    }

    assignSubscription() {
        // Unsubscribe to any previous subscription, as we currently
        // are using same page to display all 3 kinds of data
        if (this.listSubscription) this.listSubscription.unsubscribe();

        if (this.itemType === 'notes') {
            this.pageHeader = 'Notes';
            this.listSubscription = this.dataStoreService.notesData.subscribe(
                (notes) => {
                    this.itemList = notes;
                }
            );
        } else if (this.itemType === 'documents') {
            this.pageHeader = 'Documents';
            this.listSubscription =
                this.dataStoreService.documentsData.subscribe((documents) => {
                    this.itemList = documents;
                });
        } else {
            this.pageHeader = 'Credentials';
            this.listSubscription = this.dataStoreService.credsData.subscribe(
                (creds) => {
                    this.itemList = creds;
                }
            );
        }
    }

    onItemSelected() {
        console.log('Item Selected');
    }

    dateHeaderSelector(itemCurr: any, itemPrev: any): boolean {
        let prevMonth = new Date(itemPrev.createdAt).getMonth();
        let currMonth = new Date(itemCurr.createdAt).getMonth();

        if (prevMonth === currMonth) return false;
        return true;
    }

    nameHeaderSelector(itemCurr: any, itemPrev: any): boolean {
        let prevLetter = itemPrev.name.charAt(0);
        let currLetter = itemCurr.name.charAt(0);

        return prevLetter === currLetter ? false : true;
    }
}
