import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { LoginSuccess } from './pages/loginSuccess/loginSuccess';
import { RegisterSuccess } from './pages/register-success/register-success';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'loginSuccess',
    component: LoginSuccess
  },
  {
    path: 'registerSuccess',
    component: RegisterSuccess
  }
];