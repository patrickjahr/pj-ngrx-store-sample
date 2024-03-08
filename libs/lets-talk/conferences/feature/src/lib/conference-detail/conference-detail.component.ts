import { Component, effect, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  ConferencesApiActions,
  conferencesFeature,
  ConferencesPageActions,
} from '@lt/lets-talk/conferences/data-access';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Contribution } from '@lt/shared/typescript/domain';
import { Router } from '@angular/router';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'lt-conference-detail',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIcon,
    MatInput,
    MatRipple,
  ],
  templateUrl: './conference-detail.component.html',
  styleUrl: './conference-detail.component.scss',
})
export class ConferenceDetailComponent {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly fbBuilder = inject(FormBuilder);

  readonly id = input.required<string>();
  readonly conference = this.store.selectSignal(
    conferencesFeature.selectSelectedConference
  );
  readonly formGroup = this.fbBuilder.group({
    name: ['', Validators.required],
    startDate: [new Date(), Validators.required],
    endDate: [new Date(), Validators.required],
    location: [''],
  });

  protected readonly loadConference = effect(
    () => {
      this.store.dispatch(ConferencesPageActions.selectItem({ id: this.id() }));
    },
    { allowSignalWrites: true }
  );

  protected readonly updateForm = effect(() => {
    const conference = this.conference();
    if (conference) {
      this.formGroup.controls.name.setValue(conference.name);
      this.formGroup.controls.startDate.setValue(
        conference.startDate ?? new Date()
      );
      this.formGroup.controls.endDate.setValue(
        conference.endDate ?? new Date()
      );
      this.formGroup.controls.location.setValue(conference.location ?? '');
    }
  });

  async updateConference(): Promise<void> {
    const contribution = this.conference();
    const updates = this.formGroup.value as Contribution;
    if (this.formGroup.valid && updates) {
      this.store.dispatch(
        ConferencesApiActions.updateConference({
          conference: { ...contribution, ...updates },
        })
      );
    }
    await this.goBack();
  }

  async delete(): Promise<void> {
    this.store.dispatch(
      ConferencesApiActions.deleteConference({ id: this.id() })
    );
    await this.goBack();
  }

  async goBack(): Promise<void> {
    await this.router.navigate(['conferences']);
  }
}
