import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
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
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
