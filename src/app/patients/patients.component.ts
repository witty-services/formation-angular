import {Component, OnInit} from '@angular/core';
import {Patient} from '../@core/model/patient.model';
import {PatientService} from '../@core/service/patient.service';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  public patients$: Observable<Patient[]>;

  public constructor(private patientService: PatientService) {}

  public ngOnInit(): void {
    this.patients$ = this.patientService.findAll().pipe(
      shareReplay(1)
    );
  }

  public enableSensor(patient: Patient): void {
    this.patientService.updateSensor(patient.sensor).subscribe(
      () => alert(`Le capteur de ${patient.displayName} a été activé avec succès`)
    );
  }

  public disableSensor(patient: Patient): void {
    this.patientService.updateSensor(patient.sensor).subscribe(
      () => alert(`Le capteur de ${patient.displayName} a été désactivé avec succès`)
    );
  }
}
