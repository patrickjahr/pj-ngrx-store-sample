import { BaseEntity } from '../models/base';
import { BehaviorSubject } from 'rxjs';

export class CrudService<T extends BaseEntity> {
  private readonly data$$ = new BehaviorSubject<T[]>([]);

  constructor(data: T[]) {
    this.data$$.next(data);
  }

  getAll(): T[] {
    return this.data$$.value;
  }

  getItem(itemId: string): T {
    const item = this.data$$.value.find(({ id }) => id === itemId);
    if (!item) {
      throw new Error(`Item not found for id: ${itemId}`);
    }

    return item;
  }

  deleteItem(itemId: string): void {
    const index = this.data$$.value.findIndex(({ id }) => id === itemId);
    if (index < 0) {
      throw new Error(`Item not found for id: ${itemId}`);
    }
    const collection = this.data$$.value.filter(({ id }) => id !== itemId);
    this.data$$.next(collection);
  }

  updateItem(itemId: string, data: T) {
    const collection = [...this.data$$.value];
    const index = collection.findIndex(({ id }) => id === itemId);
    if (index > -1) {
      collection[index] = { ...data, id: itemId };
    }
    this.data$$.next([...collection]);
  }
}
