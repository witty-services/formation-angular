import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientsComponent} from './patients/patients.component';
import {PatientComponent} from './patient/patient.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent
  },
  {
    path: ':patientId',
    component: PatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
