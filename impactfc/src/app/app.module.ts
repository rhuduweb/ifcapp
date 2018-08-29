import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: SidenavComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
