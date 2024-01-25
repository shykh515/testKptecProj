type EventListener = (...args: any[]) => void;

class EventEmitter {
  private events: { [event: string]: EventListener[] } = {};

  addEventListener(event: string, listener: EventListener): EventListener {
    if (typeof this.events[event] !== 'object') {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return listener;
  }

  removeListener(event: string, listener: EventListener): void {
    if (typeof this.events[event] === 'object') {
      const idx = this.events[event].indexOf(listener);
      if (idx > -1) {
        this.events[event].splice(idx, 1);
      }
      if (this.events[event].length === 0) {
        delete this.events[event];
      }
    }
  }

  emit(event: string, ...args: any[]): void {
    if (typeof this.events[event] === 'object') {
      this.events[event].forEach((listener) => {
        try {
          listener.apply(this, args);
        } catch (e) {
          console.error(e);
        }
      });
    }
  }
}

const events = new EventEmitter();
export default events;
