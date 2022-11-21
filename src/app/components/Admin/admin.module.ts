import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
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


@NgModule({
  declarations: [
    CategorieDeJeuxComponent,
    JeuxComponent,
    TournoisComponent,
    TutorielsComponent,
    MembresComponent,
    ProduitsComponent,
    ReclamationsComponent,
    CommandesComponent,
    NotificationsTournoisComponent,
    EquipesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
