type EventHandler = () => void;

class EventEmitter {
    private eventHandlers: { [event: string]: EventHandler[] };

    constructor() {
        this.eventHandlers = {};
    }

    public registerHandler(event: string, handler: EventHandler): void {
        if (!(event in this.eventHandlers)) {
            this.eventHandlers[event] = [];
        }

        this.eventHandlers[event].push(handler);
    }

    public emitEvent(event: string): void {
        if (event in this.eventHandlers) {
            for (const handler of this.eventHandlers[event]) {
                handler();
            }
        }
    }
}

// Приклад використання
const emitter = new EventEmitter();
emitter.registerHandler('userUpdated', () => {
    console.log('Обліковий запис користувача оновлено');
});
emitter.emitEvent('userUpdated');
