import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component'

import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
import { ListingsComponent } from './dashboard/listings/listings.component';
import { AddListingsComponent } from './dashboard/add-listings/add-listings.component';
import { WishlistsComponent } from './dashboard/wishlists/wishlists.component';

@NgModule({
  declarations: [ 
    AppComponent, 
    StoriesComponent, 
    HomeComponent, 
    SearchResultsComponent, NotFoundComponent, DashboardComponent, EditProfileComponent, DashboardMainComponent, ListingsComponent, AddListingsComponent, WishlistsComponent 
  ],
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
