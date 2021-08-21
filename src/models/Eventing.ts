type Callback = () => void;

export class Eventing {
    events: { [key: string]: Callback[] } = {};

    // on(eventName: string, callback: ()=>{}):             // Use a type alias Callback.
    on = (eventName: string, callback: Callback): void => {
        const handlers = this.events[eventName] || [];      // Callback[] or undefined
        handlers.push(callback);                            // Events functions being stacked
        this.events[eventName] = handlers;                  //
    }

    trigger = (eventName: string): void => {
        const handlers = this.events[eventName];
        if(!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach(callback => {
            callback();
        });
    }
}