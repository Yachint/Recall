import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { exhaustMap, finalize, Observable, of, take } from 'rxjs';
import { DataStoreService } from 'src/app/data/data-store.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

// #1 Why return an empty Observable using of(null) / Observable.of(null) ?
// In order to indicate to the resolver that we have successfully resolved all
// the values and please proceed to the upcoming route. It was causing issues using just return.

// #2 Why use Exhaust map?
// Alternative would be to just convert the storage values to normal arrays instead of BehaviorSubjects
// but we can use exhaustMap to take 1 value (latest) and then check if we want to fetch or not.
// Remember, we do not subscribe() here as resolver will do that for us, but in other cases we have to.

@Injectable({ providedIn: 'root' })
export class ListViewerResolverService implements Resolve<void> {
    constructor(
        private dataStoreService: DataStoreService,
        private loaderService: LoaderService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): void | Observable<void> | Promise<void> {
        // resolve() will auto subscribe to the returned subscription
        const { type } = route.params;
        this.loaderService.setLoading(true);
        // console.log(route);
        // console.log('RESOLVER: ', route.params);
        if (type === 'notes') {
            // Using Exhaust map
            // #2
            return this.dataStoreService.notesData.pipe(
                take(1),
                exhaustMap((data) => {
                    // Return empty observable which instatantly completes
                    // #1
                    if (data !== null) return of(null);
                    return this.dataStoreService.fetchNotes();
                }),
                finalize(() => {
                    this.loaderService.setLoading(false);
                })
            );
        } else if (type === 'documents') {
            return this.dataStoreService.documentsData.pipe(
                take(1),
                exhaustMap((data) => {
                    if (data !== null) return of(null);
                    return this.dataStoreService.fetchDocuments();
                }),
                finalize(() => {
                    this.loaderService.setLoading(false);
                })
            );
        } else {
            return this.dataStoreService.credsData.pipe(
                take(1),
                exhaustMap((data) => {
                    if (data !== null) return of(null);
                    return this.dataStoreService.fetchCreds();
                }),
                finalize(() => {
                    this.loaderService.setLoading(false);
                })
            );
        }
    }
}
