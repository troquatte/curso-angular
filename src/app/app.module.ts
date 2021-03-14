import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';

import { SharedModule } from './shared/shared.module';
import { FormsComponent } from './forms/forms.component';
@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBidingComponent,
    DiretivasEstruturaisComponent,
    DiretivasAtributosComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
