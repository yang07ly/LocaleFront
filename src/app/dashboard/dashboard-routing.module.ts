import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const dashboardRoutes: Routes = [{
	path: 'dashboard',
	component: DashboardComponent,
	children: [
	{ path: '', component: DashboardMainComponent },
	{ path: 'edit-profile', component: EditProfileComponent }
	]
}]

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }