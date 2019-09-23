import { Routes } from '@angular/router';
import { ArticleCategoriesComponent } from '../components/article-categories/article-categories.component';
import { ArticleCategoriesDetailComponent } from '../components/article-categories/article-categories-detail/article-categories-detail.component';
import { ArticlesDetailComponent } from '../components/articles/articles-detail/articles-detail.component';
import { ArticlesComponent } from '../components/articles/articles.component';
import { CountriesComponent } from '../components/countries/countries.component';
import { CountriesDetailComponent } from '../components/countries/countries-detail/countries-detail.component';
import { CitiesComponent } from '../components/cities/cities.component';
import { CitiesDetailComponent } from '../components/cities/cities-detail/cities-detail.component';
import { HotelsComponent } from '../components/hotels/hotels.component';
import { HotelsDetailComponent } from '../components/hotels/hotels-detail/hotels-detail.component';
import { ToursComponent } from '../components/tours/tours.component';
import { ToursDetailComponent } from '../components/tours/tours-detail/tours-detail.component';

export const AdminLayoutRoutes: Routes = [

  {
    path: '',
    children: [
      { path: 'categories', component: ArticleCategoriesComponent },
      { path: 'categories/create', component: ArticleCategoriesDetailComponent },
      { path: 'categories/:id', component: ArticleCategoriesDetailComponent },

      { path: 'articles', component: ArticlesComponent },
      { path: 'articles/create', component: ArticlesDetailComponent },
      { path: 'articles/:id', component: ArticlesDetailComponent },

      { path: 'countries', component: CountriesComponent },
      { path: 'countries/create', component: CountriesDetailComponent },
      { path: 'countries/:id', component: CountriesDetailComponent },

      { path: 'cities', component: CitiesComponent },
      { path: 'cities/create', component: CitiesDetailComponent },
      { path: 'cities/:id', component: CitiesDetailComponent },

      { path: 'hotels', component: HotelsComponent },
      { path: 'hotels/create', component: HotelsDetailComponent },
      { path: 'hotels/:id', component: HotelsDetailComponent },

      { path: 'tours', component: ToursComponent },
      { path: 'tours/create', component: ToursDetailComponent },
      { path: 'tours/:id', component: ToursDetailComponent },

      
    ]
  },

];
