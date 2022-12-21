import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ItemViewerComponent } from './item-viewer/item-viewer.component';
import { ListViewerComponent } from './list-viewer/list-viewer.component';
import { ListViewerResolverService } from './resolvers/list-viewer.resolver';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'view/:type',
                component: ListViewerComponent,
                resolve: [ListViewerResolverService],
            },
            {
                path: 'view/:type/:id',
                component: ItemViewerComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
