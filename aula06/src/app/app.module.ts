import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercicio1Component } from './views/exercicio1/exercicio1.component';
import { FormsModule} from '@angular/forms';
import { Exercicio2Component } from './views/exercicio2/exercicio2.component';
import { ExSelectComponent } from './views/ex-select/ex-select.component';
import { ExcheckBoxComponent } from './views/excheck-box/excheck-box.component';
import { ExRadiusComponent } from './views/ex-radius/ex-radius.component';
import { Exercicio3Component } from './views/exercicio3/exercicio3.component';
import { Exercicio4Component } from './views/exercicio4/exercicio4.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercicio1Component,
    Exercicio2Component,
    ExSelectComponent,
    ExcheckBoxComponent,
    ExRadiusComponent,
    Exercicio3Component,
    Exercicio4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
