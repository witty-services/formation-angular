import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PatientsComponent} from './patients/patients.component';
import {CoreModule} from './@core/core.module';
import {SensorStatusComponent} from './sensor-status/sensor-status.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    SensorStatusComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
