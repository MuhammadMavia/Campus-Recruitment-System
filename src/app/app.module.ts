import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {SignupStudentComponent} from './signup-student/signup-student.component';
import {StudentDashboardComponent} from './student-dashboard/student-dashboard.component';
import {CompanyDashboardComponent} from './company-dashboard/company-dashboard.component';
import {ProfileComponent} from './profile/profile.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signup-students', component: SignupStudentComponent},
  {path: 'students-dashboard', component: StudentDashboardComponent},
  {path: 'company-dashboard', component: CompanyDashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', component: LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SignupStudentComponent,
    StudentDashboardComponent,
    CompanyDashboardComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
