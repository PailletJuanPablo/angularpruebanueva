import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { SliderComponent } from './slider/slider.component';
import { TextoSuperiorComponent } from './texto-superior/texto-superior.component';
import { IconosNosotrosComponent } from './iconos-nosotros/iconos-nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieDePaginaComponent,
    ContenidoComponent,
    SliderComponent,
    TextoSuperiorComponent,
    IconosNosotrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
