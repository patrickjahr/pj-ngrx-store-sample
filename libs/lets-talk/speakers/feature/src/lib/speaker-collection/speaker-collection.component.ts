import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent, scaleDeleteAnimation } from '@lt/shared/angular/ui';
import { speakerStore } from '@lt/lets-talk/speakers/data-access';
import { Router } from '@angular/router';
import { transition, trigger } from '@angular/animations';

@Component({
  selector: 'lt-speaker-collection',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CardComponent],
  templateUrl: './speaker-collection.component.html',
  styleUrl: './speaker-collection.component.scss',
  animations: [
    trigger('card', [transition(':leave', [scaleDeleteAnimation()])]),
  ],
})
export class SpeakerCollectionComponent {
  private readonly router = inject(Router);
  private readonly store = inject(speakerStore);

  readonly speakers = this.store.entities;
  readonly selectedSpeaker = this.store.selected;

  async selectSpeaker(id: string): Promise<void> {
    this.store.selectSpeaker(id);
    setTimeout(() => this.router.navigate([`speakers/${id}`]), 32);
  }
}
