import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'search',
        loadChildren: () =>
            import('./search/search.module').then((m) => m.SearchModule),
    },
    {
        path: 'settings',
        loadChildren: () =>
            import('./settings/settings.module').then((m) => m.SettingsModule),
    },
    {
        path: 'about',
        loadChildren: () =>
            import('./about/about.module').then((m) => m.AboutModule),
    },
    {
        path: 'help',
        loadChildren: () =>
            import('./help/help.module').then((m) => m.HelpModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
