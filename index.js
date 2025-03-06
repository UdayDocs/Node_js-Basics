// // const Person = require('./person')
// // import Person from "./person.js";

// const person1 = new Person('john ',39);
// const person2 = new Person('jn ',3);

// person1.greeting();
// person2.greeting();

const Logger = require('./reference/logger');
const logger = new Logger();

logger.on('message', data => console.log('ca',data));

logger.log('Hi  ')
logger.log('sdjfisdf')






