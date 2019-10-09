import {SensorStatus} from './sensor-status.enum';

export class Sensor {

  public id: string;

  public status: SensorStatus;

  public constructor(values: Partial<Sensor>) {
    Object.assign(this, values);
  }

  public isEnabled(): boolean {
    return this.status === SensorStatus.ENABLED;
  }

  public isDisabled(): boolean {
    return this.status === SensorStatus.DISABLED;
  }
}
