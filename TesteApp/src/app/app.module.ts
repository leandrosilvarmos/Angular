import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar' ;
import {MatSidenavModule} from '@angular/material/sidenav' ;
import {MatListModule} from '@angular/material/list' ;
import {MatButtonModule} from '@angular/material/button' ;
import {MatIconModule} from '@angular/material/icon';
import { ClientComponent } from './views/client/client.component';
import { AboutComponent } from './views/about/about.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    LayoutModule ,
    MatToolbarModule ,
    MatSidenavModule ,
    MatListModule ,
    MatButtonModule ,
    MatIconModule ,
    MatCardModule ,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
