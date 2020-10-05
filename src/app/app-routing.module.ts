import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VermasComponent } from './componentes/products/vermas/vermas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path: "vermas", component:VermasComponent},
{path:"**", pathMatch:"full", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
