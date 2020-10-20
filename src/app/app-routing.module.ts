import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMoreComponent } from './products/components/products/view-more/view-more.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './log-in/user/user-login/user-login.component';
import { BuscadorComponent } from './home/components/buscador/buscador.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { UserSignUpComponent } from './log-in/user/user-sign-up/user-sign-up.component';
import { ShoppingCartComponent } from './cart/components/shopping-cart/shopping-cart/shopping-cart.component';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path: "viewmore/:id", component:ViewMoreComponent},
{path: "userLogIn", component:UserLoginComponent},
{path:"search/:termino", component:BuscadorComponent},
{path:"user-profile",component:UserProfileComponent},
{path:"user-sign-up",component:UserSignUpComponent},
{path:"shopping-cart",component:ShoppingCartComponent},
{path:"**", pathMatch:"full", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
