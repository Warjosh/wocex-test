import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'app/core/services/loader.service';
import { User } from 'app/core/classes/user';


declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})

export class LoginPage implements OnInit {

  login: Object[] = [];
  usuarioForm = new FormGroup({});

  constructor(  
    private fb: FormBuilder,
    private _loader: LoaderService, 
    private _router: Router) {
    
   }

  ngOnInit() {

    this.usuarioForm = this.fb.group({
      correo: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public logIn(): void {

    const user = new User (this.usuarioForm.value['correo'], this.usuarioForm.value['password']) 

    if (user.email == 'admin@gmail.com' && user.password == '123456'){

      localStorage.setItem('token', JSON.stringify(user));

      this._loader.setLoading(true);

      setTimeout(( )=>{ 
        this._loader.setLoading(false);
        
        this._router.navigate(['/check-tasks']);

        $.notify({
          icon: 'pe-7s-info',
          message: 'Welcome User Admin.',
        }, {
          type: 'success',
          timer: 3000,
          placement: {
              from: 'top',
              align: 'right'
          }
        });
      }, 3000);

      
      
    } else {

      $.notify({
        icon: 'pe-7s-info',
        message: 'User invalid.',
      }, {
        type: 'danger',
        timer: 3000,
        placement: {
            from: 'top',
            align: 'right' 
        }
      });
    }

  }

}