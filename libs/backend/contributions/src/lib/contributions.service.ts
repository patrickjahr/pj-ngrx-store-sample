import { Injectable } from '@nestjs/common';
import {
  Contribution,
  ContributionsType,
  CrudService,
} from '@lt/shared/typescript/domain';

@Injectable()
export class ContributionsService extends CrudService<Contribution> {
  constructor() {
    super([
      {
        id: '1',
        name: 'Signal Store: Awesome thing of Code',
        type: ContributionsType.Session,
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '../assets/placeholder_1.jpeg',
      },
      {
        id: '2',
        name: 'Signal Store: Awesome thing of Code',
        type: ContributionsType.Session,
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '../assets/placeholder_2.jpeg',
      },
      {
        id: '3',
        name: 'Signal Store: Awesome thing of Code',
        type: ContributionsType.Session,
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '../assets/placeholder_1.jpeg',
      },
      {
        id: '4',
        name: 'Signal Store: Awesome thing of Code',
        type: ContributionsType.Session,
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '../assets/placeholder_1.jpeg',
      },
      {
        id: '5',
        name: 'Signal Store: Awesome thing of Code',
        type: ContributionsType.Session,
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '../assets/placeholder_2.jpeg',
      },
      {
        id: '6',
        name: 'Signal Store: Awesome thing of Code',
        type: ContributionsType.Session,
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '../assets/placeholder_2.jpeg',
      },
      {
        id: '7',
        name: 'Signal Store: Awesome thing of Code',
        type: ContributionsType.Session,
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '../assets/placeholder_1.jpeg',
      },
      {
        id: '8',
        name: 'Signal Store: Awesome thing of Code',
        type: ContributionsType.Session,
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '../assets/placeholder_2.jpeg',
      },
      {
        id: '9',
        name: 'Signal Store: Awesome thing of Code',
        type: ContributionsType.Session,
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '../assets/placeholder_1.jpeg',
      },
      {
        id: '10',
        name: 'Signal Store: Awesome thing of Code',
        type: ContributionsType.Session,
        startDate: new Date(),
        endDate: new Date(),
        imageUrl: '../assets/placeholder_1.jpeg',
      },
    ]);
  }
}
