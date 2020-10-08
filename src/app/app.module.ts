import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//inicio servicios
import{ CargarScriptsService} from "./cargar-scripts.service";

//fin servicio
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
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




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AsideComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    VermasComponent,
    InicioSesionComponent,
    TarjetaProductoComponent,
    BuscadorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
