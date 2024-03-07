import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from '@lt/shared/angular/ui';
import { speakerStore } from '@lt/lets-talk/speakers/data-access';
import { Router } from '@angular/router';

@Component({
  selector: 'lt-speaker-collection',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CardComponent],
  templateUrl: './speaker-collection.component.html',
  styleUrl: './speaker-collection.component.scss',
})
export class SpeakerCollectionComponent {
  private readonly router = inject(Router);
  private readonly store = inject(speakerStore);

  readonly speakers = this.store.entities;

  async selectSpeaker(id: string): Promise<void> {
    await this.router.navigate([`speakers/${id}`]);
  }
}
