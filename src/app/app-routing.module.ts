import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AnimeListComponent } from './anime/components/anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime/components/anime-detail/anime-detail.component';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { PopularAnimeComponent } from './anime/components/popular-anime/popular-anime.component';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { OrderComponent } from './user/components/order/order.component';

export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: LandingPageComponent },
      { path: 'anime-list', loadChildren: './anime/anime.module#AnimeModule' },
      { path: 'detail/:id', loadChildren: './anime/anime.module#AnimeModule' },
      { path: 'popular-anime', loadChildren: './anime/anime.module#AnimeModule' },
      { path: 'user-list', component: UserListComponent },
      { path: 'contact-us', component: ContactComponent },
      { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
