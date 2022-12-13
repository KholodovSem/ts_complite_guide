import { AxiosPromise, AxiosResponse } from 'axios';
import { Callback } from './Eventing';

interface ModelAttributes<T> {
  get<K extends keyof T>(value: K): T[K];
  set(value: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  on = this.events.on;

  trigger = this.events.trigger;

  get = this.attributes.get;

  set(userProps: T): void {
    this.attributes.set(userProps);
    this.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');
    if (!id) {
      return;
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then(() => {
        this.trigger('change');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
