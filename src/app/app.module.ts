import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {FormsModule} from "@angular/forms";
import {TeacherComponent} from "./teacher/teacher.component";
import {SchoolComponent} from "./school/school.component";
import {HeaderComponent} from "./header/header.component";
import {NavComponent} from "./nav/nav.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {AdmissionsComponent} from "./admissions/admissions.component";
import {RouterModule, Routes} from "@angular/router";
import {JobsComponent} from "./jobs/jobs.component";

const appRoutes: Routes = [
  {path:"",component:SchoolComponent},
  {path:"tuyensinh",component:AdmissionsComponent},
  {path:"vieclam",component:JobsComponent},
];
@NgModule({
  declarations: [
    AppComponent,HeaderComponent,NavComponent,SidebarComponent,
    StudentComponent,ClassroomComponent,TeacherComponent,
    SchoolComponent,AdmissionsComponent,JobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
