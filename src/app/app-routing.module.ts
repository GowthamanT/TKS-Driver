import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TasksComponent } from './tasks/tasks.component';
import { TripsheetComponent } from './tripsheet/tripsheet.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'tasks', component:TasksComponent},
  {path: 'attendance', component:AttendanceComponent},
  {path: 'tripsheet', component:TripsheetComponent},
  {path: 'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
