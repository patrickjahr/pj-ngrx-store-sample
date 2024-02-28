import { Injectable } from '@nestjs/common';
import { Contribution, CrudService } from '@lt/shared/typescript/domain';

@Injectable()
export class ContributionsService extends CrudService<Contribution> {
  constructor() {
    super([
      {
        id: '1',
        name: 'Signal Store: Awesome thing of Code',
      },
    ]);
  }
}
