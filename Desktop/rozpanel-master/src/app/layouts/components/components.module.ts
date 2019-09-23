import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './share_component/navbar/navbar.component';
import { SidebarComponent } from './share_component/sidebar/sidebar.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { DatatableComponent } from './share_component/datatable/datatable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select2Module } from 'ng2-select2';
import {DpDatePickerModule} from 'ng2-date-picker';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatNativeDateModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { LoginComponent } from './login/login.component';
import { ArticleCategoriesComponent } from './article-categories/article-categories.component';
import { ArticleCategoriesDetailComponent } from './article-categories/article-categories-detail/article-categories-detail.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesDetailComponent } from './articles/articles-detail/articles-detail.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesDetailComponent } from './countries/countries-detail/countries-detail.component';
import { CitiesComponent } from './cities/cities.component';
import { CitiesDetailComponent } from './cities/cities-detail/cities-detail.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelsDetailComponent } from './hotels/hotels-detail/hotels-detail.component';
import { ToursComponent } from './tours/tours.component';
import { ToursDetailComponent } from './tours/tours-detail/tours-detail.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY MMM ',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: ' YYYY MMMM',
  },
};
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatSlideToggleModule,
    Select2Module,
    DpDatePickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    DatatableComponent,
    LoginComponent,
    ArticleCategoriesComponent,
    ArticleCategoriesDetailComponent,
    ArticlesComponent,
    ArticlesDetailComponent,
    CountriesComponent,
    CountriesDetailComponent,
    CitiesComponent,
    CitiesDetailComponent,
    HotelsComponent,
    HotelsDetailComponent,
    ToursComponent,
    ToursDetailComponent,
  
   
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    DatatableComponent,
    DpDatePickerModule
  ],
  providers: [

    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})

export class ComponentsModule { }
