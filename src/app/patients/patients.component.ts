import {Component, OnInit} from '@angular/core';
import {Patient} from '../@core/model/patient.model';
import {PatientService} from '../@core/service/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  public patients: Patient[] = [];

  public constructor(private patientService: PatientService) {}

  public ngOnInit(): void {
    this.patients = this.patientService.findAll();
  }

  public enableSensor(patient: Patient): void {
    alert(`Le capteur de ${patient.displayName} a été activé avec succès`);
  }

  public disableSensor(patient: Patient): void {
    alert(`Le capteur de ${patient.displayName} a été désactivé avec succès`);
  }
}
