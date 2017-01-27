import {BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'heroes',
    component: LoginComponent,
    data: {title: 'Heroes List'}
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {path: '**', component: LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
