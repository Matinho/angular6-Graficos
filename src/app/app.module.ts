import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Graficos
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from './components/radar/radar.component';
import { TortaComponent } from './components/torta/torta.component';
import { PolarComponent } from './components/polar/polar.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarraComponent,
    DonaComponent,
    RadarComponent,
    TortaComponent,
    PolarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
