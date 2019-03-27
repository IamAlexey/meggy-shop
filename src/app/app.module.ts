import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CatalogItemComponent} from './catalog/catalog-item/catalog-item.component';
import {CatalogListComponent} from './catalog/catalog-list/catalog-list.component';
import {RublesPipe} from './pipes/rubles.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CatalogItemComponent,
    CatalogListComponent,
    RublesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
