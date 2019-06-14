import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {CatalogListComponent} from './catalog/catalog-list/catalog-list.component';
import {ProductSettingsComponent} from './backoffice/product-settings/product-settings.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogListComponent,
    pathMatch: 'full',
  },
  {
    path: 'product-settings',
    component: ProductSettingsComponent
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
