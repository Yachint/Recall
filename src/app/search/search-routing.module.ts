import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchListResolver } from './resolvers/search-list.resolver';
import { SearchComponent } from './search.component';

const routes: Routes = [
    {
        path: '',
        component: SearchComponent,
        resolve: [SearchListResolver],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SearchRoutingModule {}
