import { Injectable } from '@nestjs/common';
import { CrudService, Speaker } from '@lt/shared/typescript/domain';

@Injectable()
export class SpeakersService extends CrudService<Speaker> {
  constructor() {
    super([
      {
        id: '1',
        name: 'Peter Müller',
        firstName: 'Peter',
        lastName: 'Müller',
      },
      {
        id: '2',
        name: 'Patrick Jahr',
        firstName: 'Patrick',
        lastName: 'Jahr',
      },
    ]);
  }
}
