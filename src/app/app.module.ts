import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CatalogItemComponent} from './catalog/catalog-item/catalog-item.component';
import {CatalogListComponent} from './catalog/catalog-list/catalog-list.component';
import {RublesPipe} from './pipes/rubles.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatToolbarModule, MatIconModule, MatSelectModule, MatSidenavModule, MatListModule} from '@angular/material';
import {HeaderComponent} from './header/header.component';
import {CatalogDialogComponent} from './catalog/catalog-dialog/catalog-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    CatalogItemComponent,
    CatalogListComponent,
    CatalogDialogComponent,
    HeaderComponent,
    RublesPipe,
    MainNavComponent,
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CatalogDialogComponent]
})
export class AppModule { }
