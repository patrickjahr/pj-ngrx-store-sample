import { BaseEntity } from './base';

export interface Contribution extends BaseEntity {
  startDate?: Date;
  endDate?: Date;
  type: ContributionsType;
}

export enum ContributionsType {
  Session = 'Session',
  Workshop = 'Workshop',
}
