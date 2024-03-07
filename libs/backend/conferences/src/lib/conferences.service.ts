import { Injectable } from '@nestjs/common';
import { Conference, CrudService } from '@lt/shared/typescript/domain';

@Injectable()
export class ConferencesService extends CrudService<Conference> {
  constructor() {
    super([
      {
        id: '1',
        name: 'ng-de 2024',
        location: 'Bonn',
        startDate: new Date(2024, 9, 10),
        endDate: new Date(2024, 9, 11),
        imageUrl: '../assets/conference_placeholder_1.jpeg',
      },
      {
        id: '2',
        name: 'ng-de 2024',
        location: 'Bonn',
        startDate: new Date(2024, 9, 10),
        endDate: new Date(2024, 9, 11),
        imageUrl: '../assets/conference_placeholder_2.jpeg',
      },
      {
        id: '3',
        name: 'ng-de 2024',
        location: 'Bonn',
        startDate: new Date(2024, 9, 10),
        endDate: new Date(2024, 9, 11),
        imageUrl: '../assets/conference_placeholder_3.jpeg',
      },
      {
        id: '4',
        name: 'ng-de 2024',
        location: 'Bonn',
        startDate: new Date(2024, 9, 10),
        endDate: new Date(2024, 9, 11),
        imageUrl: '../assets/conference_placeholder_4.jpeg',
      },
      {
        id: '5',
        name: 'ng-de 2024',
        location: 'Bonn',
        startDate: new Date(2024, 9, 10),
        endDate: new Date(2024, 9, 11),
        imageUrl: '../assets/conference_placeholder_1.jpeg',
      },
      {
        id: '6',
        name: 'ng-de 2024',
        location: 'Bonn',
        startDate: new Date(2024, 9, 10),
        endDate: new Date(2024, 9, 11),
        imageUrl: '../assets/conference_placeholder_2.jpeg',
      },
      {
        id: '7',
        name: 'ng-de 2024',
        location: 'Bonn',
        startDate: new Date(2024, 9, 10),
        endDate: new Date(2024, 9, 11),
        imageUrl: '../assets/conference_placeholder_3.jpeg',
      },
      {
        id: '8',
        name: 'ng-de 2024',
        location: 'Bonn',
        startDate: new Date(2024, 9, 10),
        endDate: new Date(2024, 9, 11),
        imageUrl: '../assets/conference_placeholder_4.jpeg',
      },
    ]);
  }
}
