import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DbcontentComponent } from './components/dbcontent/dbcontent.component';
import { LoginComponent } from './components/login/login.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { EmployeComponent } from './employe/employe.component';

const routes: Routes = [
  {path:'', component:DbcontentComponent,canActivate:[AuthGuard]},
  {path:'project/:id', component:ProjectDetailComponent,canActivate:[AuthGuard]},
  {path: 'employe', component:EmployeComponent, canActivate:[AuthGuard]},
  {path:'create/employe', component:CreateEmployeComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
