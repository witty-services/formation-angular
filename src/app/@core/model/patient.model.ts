import {Sensor} from './sensor.model';

export class Patient {

  public id: string;

  public firstName: string;

  public lastName: string;

  public sensorId: string;

  public sensor: Sensor;

  public createdAt: Date;

  public constructor(values: Partial<Patient>) {
    Object.assign(this, values);
  }

  public get displayName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
