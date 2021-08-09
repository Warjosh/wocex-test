import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { LoaderModule } from './shared/loader/loader.module';

import { AppComponent } from './app.component';
import { HomeGuards } from './pages/home/guards/home.guards';
import { DashboardPage } from './pages/home/containers/dashboard/dashboard.page';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    LoaderModule,
    AppRoutingModule 
  ],
  declarations: [
    AppComponent,
    DashboardPage
  ],
  providers: [ HomeGuards ],
  bootstrap: [AppComponent]
})
export class AppModule { }
