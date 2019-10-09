import {SensorStatus} from './sensor-status.enum';

export class Patient {

  public id: string;

  public firstName: string;

  public lastName: string;

  public sensorStatus: SensorStatus;

  public createdAt: Date;

  public constructor(values: Partial<Patient>) {
    Object.assign(this, values);
  }

  public get displayName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public sensorIsEnabled(): boolean {
    return this.sensorStatus === SensorStatus.ENABLED;
  }

  public sensorIsDisabled(): boolean {
    return this.sensorStatus === SensorStatus.DISABLED;
  }
}
