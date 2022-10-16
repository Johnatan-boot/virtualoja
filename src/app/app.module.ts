import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule, LoginRoutingModule } from './autenticacao';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './reutilizaveis/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CartService } from './services/cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,





   FormsModule,
   HttpClientModule,
   LoginModule,
   LoginRoutingModule,
    //Raiz
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
