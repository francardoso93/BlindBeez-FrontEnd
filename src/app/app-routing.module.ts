import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agendamento', component: SchedulerComponent }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
