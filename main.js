const arrayBoolean = [
    false,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    true,
    true,
]
//#2
const arrayTrue = arrayBoolean.reduce((acc, item) => {
    if (item === true) {
        return acc + 1
    } else {
        return acc
    }
}, 0)
console.log(arrayTrue)

const arrayOfNumbers = [4, 1, 1, 2, 1, 4, 1, 3, 7, 7]

const numbers = arrayOfNumbers.reduce((acc, item) => {
    return acc * item
}, 1)

console.log(numbers)
//#3
const arrayOfStrings = ['ide ', 'czy ', 'nie ', 'ide ', 'oto ', 'jest ', 'pytanie ', 'dzisiejszego ', 'dnia ', 'czwartku']

const bigString = arrayOfStrings.reduce((acc, item) => {
    return acc + item
})
console.log(bigString)

//#4
const luckyNumber = [2, 123, 928, 3751, 129836, 124678, 3485638, 23487, 23, 27365, 7623465, 7235, 72348, 7821534]
const bigNumber = luckyNumber.reduce((acc, item) => {
    if (acc > item) {
        return acc
    } else if (acc < item) {
        return item
    }
})

console.log(bigNumber)

//#5
const numbersOf = [123, 81, 263, 63, 92, 430, 56, 83, 209, 43, 27, 24, 2378, 237]

const lessNumber = numbersOf.reduce((acc, item) => {
    if ((acc <= item)  && (acc %2 !== 0)) {
            return acc
    } else if ((acc >= item) && (item %2 !== 0)) {
            return item
    }
})

console.log(lessNumber)

//#6
// const myABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
//
// const longString = myABC.reduce((acc, item) => {
//     const spaceBetween = ' '
//     let newSpace = acc + spaceBetween
//     return acc + item
// })
// console.log(longString)
//
// //#7
// const voters = [
//     {name: 'Bob', age: 30, voted: true},
//     {name: 'Jake', age: 32, voted: true},
//     {name: 'Kate', age: 25, voted: false},
//     {name: 'Sam', age: 20, voted: false},
//     {name: 'Phil', age: 21, voted: true},
//     {name: 'Ed', age: 55, voted: true},
//     {name: 'Tami', age: 54, voted: true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false},
// ]
//
// const trueVoters = voters.reduce((acc, item) => {
//     if (item.voted === true) {
//         acc = acc + 1
//         return acc
//     } else return acc
// }, 0)
//
// console.log(trueVoters)
//
// //#8
// const wishlist = [
//     {title: "Tesla Model S", price: 90000},
//     {title: "4 carat diamond ring", price: 45000},
//     {title: "Fancy hacky Sack", price: 5},
//     {title: "Gold fidgit spinner", price: 2000},
//     {title: "A second Tesla Model S", price: 90000}
// ]
//
// const allCarPrice = wishlist.reduce((acc, item) => {
//     acc = acc + item.price
//     return acc
// }, 0)
// console.log(allCarPrice)
//
// //#9
// const arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]
//
// const newArrays = arrays.reduce((acc, item) => {
//     return acc.concat(item)
// })
// console.log(newArrays)
//
// //#10
// const input = [6, 36, 42, 64]
// const inputSize = input.length
// const myInput = input.reduce((acc, item) => {
//     return acc + item
// }) / inputSize
//
// console.log(myInput)