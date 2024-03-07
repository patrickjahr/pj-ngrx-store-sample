import { BaseEntity } from './base';

export interface Speaker extends BaseEntity {
  firstName: string;
  lastName: string;
  tags: string;
  imageUrl?: string;
  birthDate?: Date;
}
