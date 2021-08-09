import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeGuards } from './pages/home/guards/home.guards';
import { DashboardPage } from './pages/home/containers/dashboard/dashboard.page';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full',
  }, 
  {
		path: 'log-in',
		loadChildren: () => import('./pages/login/login.module').then( m => m.LoginModule)
	},
  {
    path: '',
    canActivate: [HomeGuards],
    component: DashboardPage,
    children: [
        {
      path: '',
      loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule)
  }]
  },
   {
    path: '**',
    redirectTo: 'log-in'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
