import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DbcontentComponent } from './components/dbcontent/dbcontent.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UpdateprojectComponent } from './components/updateproject/updateproject.component';
import { TeamComponent } from './components/team/team.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MaincontentComponent,
    DashboardComponent,
    DbcontentComponent,
    ProjectDetailComponent,
    CreateTaskComponent,
    CreateProjectComponent,
    UpdateprojectComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
