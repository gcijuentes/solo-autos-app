import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { DataslidetoDirective } from './directives/dataslideto.directive';
import { CommonModule } from '@angular/common';


import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { DetailComponent } from './pages/detail/detail.component';
registerLocaleData(es);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    DataslidetoDirective,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CommonModule
  ],
  exports: [DataslidetoDirective,CommonModule],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
