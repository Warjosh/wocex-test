import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';


import { TablePage } from './containers/table/table.page';
import { TaskPage } from './containers/task/task.page';
import { TaskFacade } from './facade/task.facade';
import { TaskState } from './state/task.state';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutingModule),
    FormsModule
  ],
  declarations: [
    TablePage, 
    TaskPage,
  ],
  providers: [
    TaskFacade,
    TaskState
  ],
})

export class HomeModule {}
