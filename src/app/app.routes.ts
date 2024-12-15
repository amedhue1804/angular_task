import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskformComponent } from './components/task/taskform/taskform.component';
import { StatsComponent } from './components/dashboard/stats/stats.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SinginComponent } from './pages/auth/singin/singin.component';
import { LoginFormComponent } from './pages/auth/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
    { path: 'login', component: LoginFormComponent },
    { path: 'home', component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
    { path: 'tasks', component: TasksComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
    { path: 'dashboard', component: DashboardComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])), children: [
        { path: 'stats', component: StatsComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
        { path: 'profile', component: ProfileComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) }
    ] },
    { path: 'taskedit/:id', component: TaskformComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
    { path: 'singin', component: SinginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
