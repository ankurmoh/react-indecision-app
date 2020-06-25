class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.age = age
        this.name = name
    }
    getGreeting() {
        //return 'Hi, I am ' + this.name + '!'
        return `Hi, I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major = 'No Major') {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }

    //Method overriding
    getDescription() {
        let description = super.getDescription()
        if (this.hasMajor()) {
            description = description + ` His/her major is ${this.major}`
        }
        return description
    }
}

class Traveller extends Person {
    constructor(name, age, home = 'Undefined') {
        super(name, age)
        this.home = home
    }
    hasHome() {
        return !!this.home
    }
    getGreeting()
    {
        let greet = super.getGreeting()
        if (this.hasHome()) {
            greet += ` I am travelling from ${this.home}`
        }
        return greet
    }
}

const me = new Student('Ankur Mohanty', 25, 'Computer Science')
console.log(me)
console.log(me.getGreeting())

const other = new Student()
consosle.log(other)
console.log(other.getGreeting())

const t = new Traveller('Eva' , 22, 'Florida')
console.log(t)
console.log(t.getGreeting())