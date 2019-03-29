import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CatalogItemComponent} from './catalog/catalog-item/catalog-item.component';
import {CatalogListComponent} from './catalog/catalog-list/catalog-list.component';
import {RublesPipe} from './pipes/rubles.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule} from '@angular/material';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from '@angular/material/typings/toolbar';
import {MatIconModule} from '@angular/material/typings/icon';
import {MatSelectModule} from '@angular/material/typings/select';

@NgModule({
  declarations: [
    AppComponent,
    CatalogItemComponent,
    CatalogListComponent,
    HeaderComponent,
    RublesPipe
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
