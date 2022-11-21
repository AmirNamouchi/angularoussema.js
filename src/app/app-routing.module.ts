import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { HasRoleGuard } from './services/hasRole.guard';
import { IsAuthenticatedGuard } from './services/is-authenticated.guard';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { AdminComponent } from './layouts/AdminLayout/admin/admin.component';
import { UserComponent } from './layouts/AdminLayout/user/user.component';
import { CategorieDeJeuxComponent } from './components/Admin/categorie-de-jeux/categorie-de-jeux.component';
import { JeuxComponent } from './components/Admin/jeux/jeux.component';
import { TournoisComponent } from './components/Admin/tournois/tournois.component';
import { TutorielsComponent } from './components/Admin/tutoriels/tutoriels.component';
import { MembresComponent } from './components/Admin/membres/membres.component';
import { ProduitsComponent } from './components/Admin/produits/produits.component';
import { ReclamationsComponent } from './components/Admin/reclamations/reclamations.component';
import { CommandesComponent } from './components/Admin/commandes/commandes.component';
import { NotificationsTournoisComponent } from './components/Admin/notifications-tournois/notifications-tournois.component';
import { EquipesComponent } from './components/Admin/equipes/equipes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { SignInComponent } from './components/Auth/sign-in/sign-in.component';

const routes: Routes = [
  { //, canActivate: [HasRoleGuard], data: { role: ['admin'] }
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', loadChildren: () => import('./components/Admin/admin.module').then(module => module.AdminModule) }
    ]
  },
  {
    path: '', component: HomeComponent
  },


  { path: 'pages-401', component: PagesBlankComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignInComponent },
  { path: '**', component: HomeComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
