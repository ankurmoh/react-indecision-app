const user = {
    name: 'Ankur',
    cities: ['New York','LA','Boston','Seattle'],
    printPlaces() {
        return this.cities.map((city) => this.name + 'has lived in' + city)
    }
}
console.log(user.printPlaces())

const multiplier = {
    numbers : [10,20,30],
    multiplyBy : 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}
console.log(multiplier.multiply())