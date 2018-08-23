import config from './config/config.json';
import {User, Product} from './models';
import events from 'events';

class MyEmitter extends events {};
const myEmitter = new MyEmitter();

myEmitter.addListener('event', () => console.log('event happened'));

myEmitter.emit('event');


let user = new User();
let product = new Product;
// console.log(config);
console.log(myEmitter.eventNames());