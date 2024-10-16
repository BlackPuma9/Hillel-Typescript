'use strict';

    class EventManager {
    constructor() {
        this.events = {};
    }

    on (event, callback) {
       if(!this.events[event]){
           this.events[event] = [];
       }
       this.events[event].push(callback);
    };
    off (event, callback) {
        if(this.events[event]){
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    };
    trigger (event, ...args) {
        if(!this.events[event]){
            return;
        }
        this.events[event].forEach((cb) => {
            cb.apply(this, args);
        })
    };
}

const eventManager = new EventManager();

function loggerMessage(message) {
    console.log(`Message one: ${message}`);
}

function loggerMessage2(message) {
    console.log(`Message two: ${message}`);
}

eventManager.on('event1', loggerMessage);
eventManager.on('event1', loggerMessage2);
eventManager.trigger('event1', 'Event1 triggered');

eventManager.off('event1', loggerMessage);
eventManager.trigger('event1', 'I will not be logged since its deleted');
