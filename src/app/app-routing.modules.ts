import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/auth-components/login/login.component';
import { SignupComponent } from './auth/auth-components/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(e => e.AdminModule) },
  { path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(e => e.CustomerModule) },
  { path: '', redirectTo: '/register', pathMatch: 'full' }, // Adaugă o rută implicită dacă este necesar
  { path: '**', redirectTo: '/register' } // Adaugă o rută wildcard pentru a redirecționa rutele nevalide
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }