import { Routes } from '@angular/router';
import { TablePage } from './containers/table/table.page';
import { TaskPage } from './containers/task/task.page';

export const HomeRoutingModule: Routes = [
    { path: 'check-tasks',    component: TablePage },
    { path: 'add-and-edit/:type',   component: TaskPage },
];
