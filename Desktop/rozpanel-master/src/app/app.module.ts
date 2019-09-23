import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './layouts/components/components.module';

import { AppComponent } from './app.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderInterceptor } from './services/httpconfig.interceptor';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
  
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [
   /*  {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
