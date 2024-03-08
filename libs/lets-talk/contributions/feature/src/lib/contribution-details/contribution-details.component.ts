import { Component, effect, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributionsStore } from '@lt/lets-talk/contributions/data-access';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { Contribution, ContributionsType } from '@lt/shared/typescript/domain';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'lt-contribution-details',
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
  templateUrl: './contribution-details.component.html',
  styleUrl: './contribution-details.component.scss',
})
export class ContributionDetailsComponent {
  private readonly router = inject(Router);
  private readonly store = inject(ContributionsStore);
  private readonly fbBuilder = inject(FormBuilder);

  readonly id = input.required<string>();

  readonly contribution = this.store.selected;
  readonly formGroup = this.fbBuilder.group({
    name: ['', Validators.required],
    startDate: [new Date(), Validators.required],
    endDate: [new Date(), Validators.required],
    type: [ContributionsType.Session, Validators.required],
  });

  protected readonly updateForm = effect(() => {
    const contribution = this.contribution();
    if (contribution) {
      this.formGroup.controls.name.setValue(contribution.name);
      this.formGroup.controls.startDate.setValue(
        contribution.startDate ?? new Date()
      );
      this.formGroup.controls.endDate.setValue(
        contribution.endDate ?? new Date()
      );
      this.formGroup.controls.type.setValue(contribution.type);
    }
  });

  protected readonly loadContribution = effect(
    () => this.store.loadContribution(this.id()),
    {
      allowSignalWrites: true,
    }
  );

  async updateContribution(): Promise<void> {
    const contribution = this.contribution();
    const updates = this.formGroup.value as Contribution;
    console.log('Updated contribution values', updates);
    if (this.formGroup.valid && updates) {
      this.store.updateContribution({ ...contribution, ...updates });
    }
    await this.goBack();
  }

  async delete(): Promise<void> {
    this.store.deleteContribution(this.id());
    await this.goBack();
  }

  async goBack(): Promise<void> {
    await this.router.navigate(['contributions']);
  }
}
