import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbcontentComponent } from './components/dbcontent/dbcontent.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

const routes: Routes = [
  {path:'', component:DbcontentComponent},
  {path:'project/:id', component:ProjectDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
