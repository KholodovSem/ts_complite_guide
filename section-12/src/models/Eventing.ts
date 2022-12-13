export type Callback = () => void;

interface EventStorage {
  [key: string]: Callback[];
}

export class Eventing {
  events: EventStorage = {};

  //* Event registration and triggering
  //Event storage
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    for (let callback of handlers) {
      callback();
    }
  };
}
