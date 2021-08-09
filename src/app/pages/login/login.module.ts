import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './containers/login.page';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    ReactiveFormsModule 
  ],
  providers: [
    /* LoginFacade, */
  ],
})
export class LoginModule { }
