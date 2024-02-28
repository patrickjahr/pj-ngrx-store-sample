import { Injectable } from '@nestjs/common';
import { Conference } from '@lt/shared/typescript/domain';
import { CrudService } from '@lt/shared/typescript/domain';

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
      },
    ]);
  }
}
