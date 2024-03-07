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
        tags: 'Angular',
        imageUrl:
          'https://qupaya.com/wp-content/uploads/2023/03/peter-mueller.jpg',
      },
      {
        id: '2',
        name: 'Patrick Jahr',
        firstName: 'Patrick',
        lastName: 'Jahr',
        tags: 'Angular',
      },
      {
        id: '3',
        name: 'Marco A. Salas Díaz',
        firstName: 'Marco',
        lastName: 'A. Salas Díaz',
        tags: 'Angular',
        imageUrl:
          'https://qupaya.com/wp-content/uploads/2023/03/marco-salas.jpg',
      },
      {
        id: '4',
        name: 'Gerrit Letz',
        firstName: 'Gerrit',
        lastName: 'Letz',
        tags: 'Angular',
        imageUrl:
          'https://qupaya.com/wp-content/uploads/2023/03/gerrit-letz.jpg',
      },
      {
        id: '5',
        name: 'Andreas Tennert',
        firstName: 'Andreas',
        lastName: 'Tennert',
        tags: 'Angular',
        imageUrl:
          'https://qupaya.com/wp-content/uploads/2023/03/andreas-tennert.jpg',
      },
      {
        id: '6',
        name: 'Inga Schallock',
        firstName: 'Inga',
        lastName: 'Schallock',
        tags: 'Angular',
        imageUrl:
          'https://qupaya.com/wp-content/uploads/2023/03/inga-schallock.jpg',
      },
      {
        id: '7',
        name: 'Dariant Virgie Siswadie',
        firstName: 'Dariant',
        lastName: 'Virgie Siswadie',
        tags: 'Angular',
        imageUrl:
          'https://qupaya.com/wp-content/uploads/2023/03/dariant-virgie.jpg',
      },
      {
        id: '8',
        name: 'Saninn Salas Díaz',
        firstName: 'Saninn',
        lastName: 'Salas Díaz',
        tags: 'Angular, Ionic',
        imageUrl:
          'https://qupaya.com/wp-content/uploads/2023/03/saninn-salas-diaz.jpg',
      },
      {
        id: '9',
        name: 'Andrea Cossu',
        firstName: 'Andrea',
        lastName: 'Cossu',
        tags: 'Social Media, Marketing',
        imageUrl:
          'https://qupaya.com/wp-content/uploads/2023/03/andrea-cossu.jpg',
      },
      {
        id: '10',
        name: 'Johannes Witt',
        firstName: 'Johannes',
        lastName: 'Witt',
        tags: 'Angular',
        imageUrl:
          'https://qupaya.com/wp-content/uploads/2023/03/johannes-witt.jpg',
      },
      {
        id: '11',
        name: 'Markus Ende',
        firstName: 'Markus',
        lastName: 'Ende',
        tags: 'Angular',
        imageUrl:
          'https://qupaya.com/wp-content/uploads/2023/03/markus-ende.jpg',
      },
    ]);
  }
}
