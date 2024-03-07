import { Component, effect, inject, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { speakerStore } from '@lt/lets-talk/speakers/data-access';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButton, MatFabButton } from '@angular/material/button';
import { Speaker } from '@lt/shared/typescript/domain';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'lt-speaker-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatHint,
    MatButton,
    MatFabButton,
    MatIcon,
    MatRipple,
  ],
  templateUrl: './speaker-details.component.html',
  styleUrl: './speaker-details.component.scss',
})
export class SpeakerDetailsComponent {
  private readonly store = inject(speakerStore);
  private readonly router = inject(Router);
  private readonly fbBuilder = inject(FormBuilder);

  readonly id = input.required<string>();
  readonly speaker = this.store.selected;

  readonly formGroup = this.fbBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    tags: [''],
    birthDate: ['', new Date()],
  });

  async updateSpeaker(): Promise<void> {
    const speaker = this.speaker();
    const updates = this.formGroup.value as Speaker;
    if (this.formGroup.valid && updates) {
      this.store.updateSpeaker({ ...speaker, ...updates });
    }
    await this.goBack();
  }

  protected readonly updateForm = effect(() => {
    const speaker = this.speaker();
    if (speaker) {
      this.formGroup.controls.firstName.setValue(speaker.firstName);
      this.formGroup.controls.lastName.setValue(speaker.lastName);
      this.formGroup.controls.tags.setValue(speaker.tags);
      if (speaker.birthDate) {
        this.formGroup.controls.birthDate.setValue(speaker.birthDate);
      }
    }
  });

  protected readonly loadSpeaker = effect(
    () => this.store.selectSpeaker(this.id()),
    {
      allowSignalWrites: true,
    }
  );

  async goBack(): Promise<void> {
    await this.router.navigate(['speakers']);
  }
}
