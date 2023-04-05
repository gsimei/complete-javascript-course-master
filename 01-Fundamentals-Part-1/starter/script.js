
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

// const hasDriversLicense = true;
// const hasGoodVision = true

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision

// if (shouldDrive) {
//   console.log('Sarah is able to drive!')
// } else {
//   console.log ('Someone else should drive...')
// }

// const isTired = false // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!')
// } else {
//   console.log ('Someone else should drive...')
// }
// const scoreDolphins = [97, 112, 101]
// const scoreKoalas = [109, 95, 106]

// const scoreDolphins = [97, 112, 101]
// const scoreKoalas = [109, 95, 123]

// const scoreDolphins = [96, 108, 89]
// const scoreKoalas = [88, 91, 110]

// const scoreDolphins = [110, 110, 50]
// const scoreKoalas = [110, 110, 70]

// const sumDolphins = scoreDolphins.reduce((x, y) => x + y, 0)
// const averageDolphins = sumDolphins / scoreDolphins.length;
// console.log(`The Dolphins average is ${averageDolphins}`)

// const sumKoalas = scoreKoalas.reduce((x, y) => x + y, 0)
// const averageKoalas = sumKoalas / scoreKoalas.length;
// console.log(`The Koalas average is ${averageKoalas}`)

// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//   console.log("Dolphins are the Champions")
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//   console.log("Koalas are the Champions")
// } else if (averageDolphins === averageKoalas && averageDolphins >= 100) {
//   console.log ("Both wins the Trophy")
// } else {
//   console.log("No Champions")
// }

// const day = 'sunday'

// switch(day) {
//   case 'monday':
//     console.log('Plan course structure')
//     console.log('Go to coding meetup')
//     break
//   case 'tuesday':
//     console.log('Prepare theory videos')
//     break
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples')
//     break
//   case 'friday':
//     console.log('Record videos')
//     break
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekends :D')
//     break
//   default:
//     console.log('Not a valid day!')
// }
// if (day === 'monday') {
//   console.log('Plan course structure')
//   console.log('Go to coding meetup')
// }else if (day === 'tuesday'){
//   console.log('Prepare theory videos')
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples')
// } else if (day === 'friday') {
//   console.log('Record videos')
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekends :D')
// } else {
//   console.log('Not a valid day!')
// }

// const age = 23
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water')

// const drink = age >= 18 ? 'wine' : 'water'
// console.log(drink)

const bill = 40
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20
// let tip = 10/100
// if (bill >= 50 && bill <= 300) {
//   tip = 15/100
// } else {
//   tip = 20/100
// }

console.log(`The bill was $${bill} the tip was $${tip}, and the total value $${bill + tip}`)
