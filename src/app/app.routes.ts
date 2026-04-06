import { Routes } from '@angular/router';
import { authGuard } from './components/guard/auth-guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./components/authentication/login/login').then(m => m.Login)
    },
    {
        path: 'signup',
        loadComponent: () => import('./components/authentication/signup/signup').then(m => m.Signup)
    },
    {
        path: '',
        loadComponent: () => import('./components/sidebar/sidebar').then(m => m.Sidebar),
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./components/dashboard/dashboard').then(m => m.Dashboard)
            },
            {
                path: 'organization-details',
                loadComponent: () => import('./components/organization-details/organization-details').then(m => m.OrganizationDetails)
            },
            {
                path: 'invite-users',
                loadComponent: () => import('./components/invite-users/invite-users').then(m => m.InviteUsers)
            },
            {
                path: 'manage-currency',
                loadComponent: () => import('./components/manage-currency/manage-currency').then(m => m.ManageCurrency)
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
