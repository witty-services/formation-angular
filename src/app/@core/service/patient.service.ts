import {Inject, Injectable} from '@angular/core';
import {Patient} from '../model/patient.model';
import {SENSOR_STATUTES, SensorStatus} from '../model/sensor-status.enum';
import {Chance} from 'chance';

const chance: Chance = new Chance();

@Injectable()
export class PatientService {

  private patients: Patient[] = [];

  public constructor(@Inject('patientCount') patientCount: number) {
    for (let i = 0; i < patientCount; i++) {
      this.patients.push(new Patient({
        id: `${i}`,
        firstName: chance.first(),
        lastName: chance.last(),
        sensorStatus: chance.pickone(SENSOR_STATUTES),
        createdAt: new Date()
      }));
    }
  }

  public findAll(): Patient[] {
    return this.patients;
  }
}
