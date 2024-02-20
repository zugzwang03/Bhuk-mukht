import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'registration', component: RegistrationPageComponent },
    { path: 'services', component: ServicesComponent }
];
