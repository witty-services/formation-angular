import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Inject, Injectable} from '@angular/core';
import {Patient} from '../model/patient.model';
import {SENSOR_STATUTES, SensorStatus} from '../model/sensor-status.enum';
import {Chance} from 'chance';
import {Sensor} from '../model/sensor.model';

const chance: Chance = new Chance();

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  public constructor(@Inject('patientCount') private patientCount: number) {}

  public createDb(): {patients: Patient[], sensors: Sensor[]} {
    const patients: Patient[] = [];
    for (let i = 0; i < this.patientCount; i++) {
      patients.push(new Patient({
        id: `${i}`,
        firstName: chance.first(),
        lastName: chance.last(),
        sensorId: `S${i}`,
        createdAt: new Date()
      }));
    }

    const sensors: Sensor[] = [];
    for (let i = 0; i < this.patientCount; i++) {
      sensors.push(new Sensor({
        id: `S${i}`,
        status: chance.pickone(SENSOR_STATUTES)
      }));
    }

    return {
      patients,
      sensors
    };
  }
}

