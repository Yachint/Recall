import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { exhaustMap, finalize, Observable, of, take } from 'rxjs';
import { DataStoreService } from 'src/app/data/data-store.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Injectable({
    providedIn: 'root',
})
export class SearchListResolver implements Resolve<void> {
    constructor(
        private dataStoreService: DataStoreService,
        private loaderService: LoaderService
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): void | Observable<void> | Promise<void> {
        this.loaderService.setLoading(true);
        return this.dataStoreService.userData.pipe(
            take(1),
            exhaustMap((data) => {
                if (data !== null) return of(null);
                return this.dataStoreService.fetchAll();
            }),
            finalize(() => {
                this.loaderService.setLoading(false);
            })
        );
    }
}
