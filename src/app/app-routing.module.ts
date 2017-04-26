import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full'}, 
	{ path: '', component: HomeComponent }, 
	{ path: 'stories', component: StoriesComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
