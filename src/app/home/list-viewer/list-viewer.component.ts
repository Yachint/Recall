import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private listSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private dataStoreService: DataStoreService
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

    assignSubscription() {
        // Unsubscribe to any previous subscription, as we currently
        // are using same page to display all 3 kinds of data
        if (this.listSubscription) this.listSubscription.unsubscribe();

        if (this.itemType === 'notes') {
            this.listSubscription = this.dataStoreService.notesData.subscribe(
                (notes) => {
                    this.itemList = notes;
                }
            );
        } else if (this.itemType === 'documents') {
            this.listSubscription =
                this.dataStoreService.documentsData.subscribe((documents) => {
                    this.itemList = documents;
                });
        } else {
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
}
