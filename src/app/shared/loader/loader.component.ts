import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from 'app/core/services/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {

  public loading$: Observable<boolean>;

  constructor(
    private _loader: LoaderService,
  ) {
    this.loading$ = this._loader.getLoading$();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
