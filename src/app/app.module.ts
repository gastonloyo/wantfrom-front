import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './home/components/banner/banner.component';
import { AsideComponent } from './home/components/aside/aside.component';
import { ProductsComponent } from './products/components/products/products.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import Popper from 'popper.js';
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { HomeComponent } from './home/home.component';
import { VermasComponent } from './products/components/products/vermas/vermas.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { HttpClientModule } from "@angular/common/http";
import { TarjetaProductoComponent } from './products/components/products/tarjeta-producto/tarjeta-producto.component';
import { BuscadorComponent } from './home/components/buscador/buscador.component';
import { NormalHeaderComponent } from './shared/components/headers/normal-header/normal-header.component';
import { UserHeaderComponent } from './shared/components/headers/user-header/user-header.component';
import { AdminHeaderComponent } from './shared/components/headers/admin-header/admin-header.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { AdminProfileComponent } from './profile/admin-profile/admin-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AsideComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    VermasComponent,
    InicioSesionComponent,
    TarjetaProductoComponent,
    BuscadorComponent,
    NormalHeaderComponent,
    UserHeaderComponent,
    AdminHeaderComponent,
    UserProfileComponent,
    AdminProfileComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
