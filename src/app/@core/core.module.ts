import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientService} from './service/patient.service';
import {environment} from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PatientService,
    {
      provide: 'patientCount',
      useValue: environment.patientCount
    }
  ]
})
export class CoreModule {

  public constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
