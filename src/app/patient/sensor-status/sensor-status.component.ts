import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SENSOR_STATUTES, SensorStatus} from '../../@core/model/sensor-status.enum';

@Component({
  selector: 'app-sensor-status',
  templateUrl: './sensor-status.component.html',
  styleUrls: ['./sensor-status.component.scss']
})
export class SensorStatusComponent {

  public readonly SENSOR_STATUTES: SensorStatus[] = SENSOR_STATUTES;

  @Input()
  public status: SensorStatus;

  @Output()
  public statusChange: EventEmitter<SensorStatus> = new EventEmitter<SensorStatus>();

  @Output()
  public enable: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public disable: EventEmitter<void> = new EventEmitter<void>();

  public onChange(value: SensorStatus): void {
    this.statusChange.emit(value);
    if (value === SensorStatus.ENABLED) {
      this.enable.emit();
    } else {
      this.disable.emit();
    }
  }
}
