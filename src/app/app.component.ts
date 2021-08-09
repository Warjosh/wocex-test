import { Component, OnInit } from '@angular/core';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _loader: LoaderService) {
    this._loader.setLoading(true);
    setTimeout(( )=>{ 
     this._loader.setLoading(false);
    }, 3000);
    
  }

  ngOnInit() {
    localStorage.clear();
  }
}
