import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CatalogItemComponent} from './catalog/catalog-item/catalog-item.component';
import {CatalogListComponent} from './catalog/catalog-list/catalog-list.component';
import {RublesPipe} from './pipes/rubles.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CatalogDialogComponent} from './catalog/catalog-dialog/catalog-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatCardModule} from '@angular/material/card';
import { CatalogPurchaseDialogComponent } from './catalog/catalog-purchase-dialog/catalog-purchase-dialog.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CatalogItemComponent,
    CatalogListComponent,
    CatalogDialogComponent,
    RublesPipe,
    MainNavComponent,
    CatalogPurchaseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CatalogDialogComponent, CatalogPurchaseDialogComponent]
})
export class AppModule {
}
