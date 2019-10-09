import {Component} from '@angular/core';
import {Patient} from '../@core/model/patient.model';
import {Chance} from 'chance';
import {SENSOR_STATUTES, SensorStatus} from '../@core/model/sensor-status.enum';
import {environment} from '../../environments/environment';

const chance: Chance = new Chance();

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent {

  public patients: Patient[] = [];

  public constructor() {
    for (let i = 0; i < environment.patientCount; i++) {
      this.patients.push(new Patient({
        id: `${i}`,
        firstName: chance.first(),
        lastName: chance.last(),
        sensorStatus: chance.pickone(SENSOR_STATUTES),
        createdAt: new Date()
      }));
    }
  }

  public enableSensor(patient: Patient): void {
    alert(`Le capteur de ${patient.displayName} a été activé avec succès`);
  }

  public disableSensor(patient: Patient): void {
    alert(`Le capteur de ${patient.displayName} a été désactivé avec succès`);
  }
}
