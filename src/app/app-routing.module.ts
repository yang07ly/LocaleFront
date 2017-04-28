import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoriesComponent } from './stories/stories.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full'}, 
	{ path: '', component: HomeComponent }, 
	{ path: 'dashboard', component: DashboardComponent },
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
