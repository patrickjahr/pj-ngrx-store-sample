import { BaseEntity } from './base';

export interface Conference extends BaseEntity {
  location?: string;
  startDate?: Date;
  endDate?: Date;
}
