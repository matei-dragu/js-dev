// ---------- ARRAY DESTRUCTURING --------------------------------------------------------------------------------------
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

// classic approach:
// const a = alphabet[0]
// const b = alphabet[1]

// array destructuring - take the array apart and put its values into the const values below:
// the destructuring happens from the contents - from the zero-index based positional values POV
const [a, b, c] = alphabet

console.log(a)
console.log(b)
console.log(c)

// skip a specific array value - notice the missing value + spread operator which gets assigned the rest:
const [a2, /* we skip 'B' - the second element */, c2, ...rest2] = alphabet

console.log(a2)
console.log(c2)
console.log(rest2) // this is an array containing the rest of the values

// combine 2 arrays with the spread operator
const combinedArray = [...alphabet, ...numbers]
console.log(combinedArray)

// return nan array of values from a function
function sumAndMultiply(a, b) {
    return [a+b, a*b]
}

function sumMultiplyAndDivide(a, b) {
    return [a+b, a*b, a/b]
}

const sam = sumAndMultiply(2, 3)
console.log(sam)

// destructure an array returned by a function into constituent elements
// SQUARE BRACKETS
const [sum23, mul23] = sumAndMultiply(2, 3)
console.log(sum23)
console.log(mul23)

// with destructuring you can assign default values in case the input to destructure hasn't provided it
// SQUARE BRACKETS
const [sum34, mul34, division34 = 'No division'] = sumAndMultiply(3, 4)
console.log(sum34)
console.log(mul34)
console.log(division34) // will fall back to the default value in case it's not returned

// SQUARE BRACKETS
const [sum45, mul45, division45 = 'No division'] = sumMultiplyAndDivide(4, 5)
console.log(sum45)
console.log(mul45)
console.log(division45) // value returned, the default will not be used

// ---------- OBJECT DESTRUCTURING -------------------------------------------------------------------------------------

const personOne = {
    name: 'John',
    age: 30,
    favouriteFood: 'Tenderloin Steak',
    address: {
        city: 'Bar Harbor',
        state: 'Maine',
    }
}

const personTwo = {
    name: 'Peter',
    age: 31,
    address: {
        city: 'Burlington',
        state: 'Vermont',
    }
}

// !!! The identifier names must match the object properties we are destructuring !!!
// CURLY BRACKETS
const { name, age } = personTwo
console.log(name)
console.log(age)

// Aliasing the identifiers while destructuring - objectKey: identifierName
// Default values work here as well in case the object doesn't have a field with the requested name
// CURLY BRACKETS
const { name: nameP2, age: ageP2, favouriteFood: favouriteFoodP2 = 'Rib-eye Steak' } = personTwo
console.log(nameP2)
console.log(ageP2)
console.log(favouriteFoodP2) // default value assigned

const { name: nameP1, age: ageP1, favouriteFood: favouriteFoodP1 = 'Rib-eye Steak' } = personOne
console.log(nameP1)
console.log(ageP1)
console.log(favouriteFoodP1) // actual value assigned

// getting the rest of the object after destructuring
const {name: nameP1_v2, ...restOfP1_v2} = personOne
console.log(nameP1_v2)
console.log(restOfP1_v2) // everything that was NOT extracted out during destructuring - as an Object

// nested object destructuring + aliasing:
const {name: nameP1_v3,  address: {city: addressCity_P1_v3}} = personOne
console.log(nameP1_v3)
console.log(addressCity_P1_v3)

// Combine 2 objects via destructuring
const personThree = {
    name: 'Michael',
    age: 32,
    favouriteFood: 'Tenderloin Steak',
    address: {
        city: 'Portland',
        state: 'Oregon',
    }
}

// this object intentionally contains only a subset of the keys of personThree
const personFour = {
    age: 33,
    favouriteFood: 'Oysters',
}

// combine the 2 objects; the fields of the second object (personFour) WILL OVERRIDE THE FIELDS OF THE FIRST OBJECT
// (personThree)
const personThreePlusFour = {...personThree, ...personFour}
console.log(personThreePlusFour)

// object destructuring in case of function parameters:
// the destructured fields will be extracted from the single input parameter to this function
// default values work as well
function printUserDetails({name, age, favouriteFood = 'Gumbo'}) {
    console.log(`Name is: ${name}, age is ${age}, favourite food is ${favouriteFood}`)
}

printUserDetails(personOne);
printUserDetails(personTwo);
printUserDetails(personThree);
