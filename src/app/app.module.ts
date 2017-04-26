import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component'

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    HomeComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    }, {
      path: '',
      component: HomeComponent
    }, {
      path: 'stories',
      component: StoriesComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
