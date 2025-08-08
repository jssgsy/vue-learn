import {defineStore} from "pinia";

export let useCounterStore = defineStore('counter', {
    state: () => {
        return {count: 0};
    },
    getters: {
        doubleCounter: (state) => {
            return this.count * 2;
        }
    },
    actions: {
        plus(num)  {
            console.log('actions:timeCounter');
            this.count += num;
        },
        minus(num) {
            console.log('actions:tripleCounter');
            this.count -= num;
        }
    }
})