import {Component, OnInit} from '@angular/core';
import {Patient} from '../../@core/model/patient.model';
import {PatientService} from '../../@core/service/patient.service';
import {from, Observable} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-patients',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  public patient$: Observable<Patient>;

  public constructor(private patientService: PatientService,
                     private route: ActivatedRoute,
                     private router: Router) {}

  public ngOnInit(): void {
    this.patient$ = this.route.params.pipe(
      map((params: Params) => params[`patientId`]),
      mergeMap((patientId: string) => this.patientService.findById(patientId)),
      catchError(() => from(this.router.navigate(['/', 'patients'])).pipe(
        map(() => null)
      ))
    );
  }

  public onSubmit(patient: Patient): void {
    this.patientService.update(patient).subscribe(
      () => this.router.navigate(['/', 'patients'])
    );
  }
}
