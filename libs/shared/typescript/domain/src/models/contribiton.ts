import { BaseEntity } from './base';

export interface Contribution extends BaseEntity {
  startDate?: Date;
  endDate?: Date;
}
