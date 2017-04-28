import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

// Dashboard Sub-Component
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
import { ListingsComponent } from './dashboard/listings/listings.component';
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';
import { AddListingsComponent } from './dashboard/add-listings/add-listings.component';
import { WishlistsComponent } from './dashboard/wishlists/wishlists.component';

import { StoriesComponent } from './stories/stories.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full'}, 
	{ path: '', component: HomeComponent }, 
	{ path: 'dashboard', component: DashboardComponent, children: [
		{ path: '', component: DashboardMainComponent },
		{ path: 'edit-profile', component: EditProfileComponent },
		{ path: 'listings', component: ListingsComponent },
		{ path: 'wishlists', component: WishlistsComponent },
		{ path: 'add-listings', component: AddListingsComponent }
	]},
	{ path: 'stories', component: StoriesComponent },
	{ path: 'search-results', component: SearchResultsComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '/404' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
