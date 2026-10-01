import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee/login',
    pathMatch: 'full'
  },
  {
    path: 'employee/login',
    loadComponent: () =>
      import('./auth/employee-login/employee-login.component')
        .then(m => m.EmployeeLoginComponent)
  },
  {
    path: 'employee/dashboard',
    loadComponent: () =>
      import('./employee/employee-dashboard/employee-dashboard.component')
        .then(m => m.EmployeeDashboardComponent)
  },
  {
    path: '**',
    redirectTo: 'employee/login'
  }
];