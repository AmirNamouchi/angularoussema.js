import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieDeJeuxComponent } from './categorie-de-jeux/categorie-de-jeux.component';
import { JeuxComponent } from './jeux/jeux.component';
import { TournoisComponent } from './tournois/tournois.component';
import { TutorielsComponent } from './tutoriels/tutoriels.component';
import { MembresComponent } from './membres/membres.component';
import { ProduitsComponent } from './produits/produits.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { CommandesComponent } from './commandes/commandes.component';
import { NotificationsTournoisComponent } from './notifications-tournois/notifications-tournois.component';
import { EquipesComponent } from './equipes/equipes.component';
import { UsersProfileComponent } from '../../pages/users-profile/users-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

 { path: 'dashboard', component: DashboardComponent, },
  { path: 'categoriesdejeux', component: CategorieDeJeuxComponent },
  { path: 'jeux', component: JeuxComponent },
  { path: 'tournois', component: TournoisComponent },
  { path: 'tutoriels', component: TutorielsComponent },
  { path: 'membres', component: MembresComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'reclamations', component: ReclamationsComponent },
  { path: 'commandes', component: CommandesComponent },
  { path: 'notificationstournois', component: NotificationsTournoisComponent },
  { path: 'equipes', component: EquipesComponent },
  { path: 'profile', component: UsersProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
