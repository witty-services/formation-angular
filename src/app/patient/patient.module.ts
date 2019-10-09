import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientComponent} from './patient/patient.component';
import {PatientsComponent} from './patients/patients.component';
import {PatientRoutingModule} from './patient-routing.module';
import {SensorStatusComponent} from './sensor-status/sensor-status.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PatientComponent,
    PatientsComponent,
    SensorStatusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
