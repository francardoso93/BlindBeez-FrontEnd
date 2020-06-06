import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SubmitResultComponent } from './scheduler/submit-result/submit-result.component';
import { AdminScheduleViewerComponent } from './admin/admin-schedule-viewer/admin-schedule-viewer.component';
import { AdminNewScheduleComponent } from './admin/admin-new-schedule/admin-new-schedule.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNewCompanyComponent } from './admin/admin-new-company/admin-new-company.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agendamento', component: SchedulerComponent },
  { path: 'resposta', component: SubmitResultComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'admin/agenda', component: AdminScheduleViewerComponent},
  { path: 'admin/agenda/novo', component: AdminNewScheduleComponent},
  { path: 'admin/empresas/novo', component: AdminNewCompanyComponent},
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
