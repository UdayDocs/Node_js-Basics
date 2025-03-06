class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;

    }

    greeting() {
        console.log(`my name is ${this.name}, age is ${this.age}`)
    }

}

export default Person;
// module.exports = Person