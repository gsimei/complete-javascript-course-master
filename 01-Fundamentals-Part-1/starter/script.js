
// let js = 'amazing'
// console.log(40 + 8 + 23 - 10)

// 'Jonas'

// const country = 'Italy'
// const continent = 'Europe'
// let population = 66000000

// console.log(country)
// console.log(continent)
// console.log(population)

// const isIsland = false
// const language = 'italian'


// console.log(country)
// console.log(continent)
// console.log(population)
// console.log(isIsland)
// console.log(language)

// const ageJonas = 2037 - 1991

// const markWeight = 78
// const markHeight = 1.69
// const johnWeight = 92
// const johnHeight = 1.95

// const markBMI = markWeight / markHeight ** 2
// const johnBMI = johnWeight / johnHeight ** 2

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI})!`)
// }

// const favorite = prompt("What's your favorite number?")
// console.log(typeof favorite)

// if (favorite) {
//   console.log(`Cool! ${favorite} is an amazing number!`)
// }

const hasDriversLicense = true;
const hasGoodVision = true

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision

// if (shouldDrive) {
//   console.log('Sarah is able to drive!')
// } else {
//   console.log ('Someone else should drive...')
// }

const isTired = false // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!')
} else {
  console.log ('Someone else should drive...')
}
// const scoreDolphins = [97, 112, 101]
// const scoreKoalas = [109, 95, 106]

// const scoreDolphins = [97, 112, 101]
// const scoreKoalas = [109, 95, 123]

// const scoreDolphins = [96, 108, 89]
// const scoreKoalas = [88, 91, 110]

const scoreDolphins = [110, 110, 50]
const scoreKoalas = [110, 110, 70]

const sumDolphins = scoreDolphins.reduce((x, y) => x + y, 0)
const averageDolphins = sumDolphins / scoreDolphins.length;
console.log(`The Dolphins average is ${averageDolphins}`)

const sumKoalas = scoreKoalas.reduce((x, y) => x + y, 0)
const averageKoalas = sumKoalas / scoreKoalas.length;
console.log(`The Koalas average is ${averageKoalas}`)

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log("Dolphins are the Champions")
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log("Koalas are the Champions")
} else if (averageDolphins === averageKoalas && averageDolphins >= 100) {
  console.log ("Both wins the Trophy")
} else {
  console.log("No Champions")
}
