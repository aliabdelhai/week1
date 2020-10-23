
const maxCapacity = 14
let surfTime = true
let bestStudent
// const purposeInLife

console.log(maxCapacity)
console.log(surfTime)
console.log(bestStudent)
// console.log(purposeInLife)


let myVar = "swimming "
// const result = myVar + "is the best thing ever"
// console.log(result)

myVar = myVar + "is the best thing ever"
console.log(myVar)

const password = "I love coding"
const confirmPassword = "I love coding"
console.log(password == confirmPassword)

// if(password == confirmPassword){
//     console.log("next step")
// }else{
//     console.log("something wrong!")
// }


const firstNumber = 423
const secondNumber = 12
const result = 423 * 12
console.log(result)

console.log(802/2)

console.log((5+6) * 3)
console.log((5 > 2) && false)
console.log(!("knife" === "sword"))
console.log((1 < 2) || (-1 > -1) || !false)
console.log((31 % 5) == "1")
console.log(!!true)
console.log("5th Avenue" != "5th Avenue")
console.log(52 !== "52")


// let a = 3
// a = 4
// let c = 0
// let b = a
// b = 2
// a = b
// b = c
// c = a
// a = b

// console.log(a + "," + b + "," + c)

// a=0, b=0, c=2



let username = prompt("What is your username?")
console.log(username)

let numChildren = prompt("How many children do you have?")
let isCareful = false

if(!isCareful)
{
    numChildren++
}
console.log(numChildren)

let silverwareCount = 100
if(silverwareCount % 2 != 0)
{
    console.log("There is something missing")
}

let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if(performance == "stellar")
{
    salary += stellarBonus
}
else if(performance == "good"){
    salary += goodBonus
}

const isVIP = false
let cash = 500

if(isVIP || cash > 300)
{
    console.log("Welcome to the club!")
}
else{
    console.log("You're in the wrong place!")
}

const a = 3
let b = 2
let c = 0 || 12

let d

b = c
b++ //b=13
if(d){
  b = a
}

//a=3 b= 13 c = 12 

d = a + (b * c) // d= 159
d++ // 160
b += 2 // 15

console.log(a + "," + b + "," + c + "," + d)
// a = 3 b = 15 c = 12 d = 160


const gender = null
let profession = "business"

if(gender == "male")
{
    profession += "man"
}
else if(gender == "female")
{
    profession += "woman"
}
else{
    profession += "person"
}

console.log(profession)


let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
let yearOfHavingTesla = currentYear - yearOfTeslaPurchase

if(boughtTesla && isUSCitizen)
{
    if(yearOfHavingTesla >= 4)
    {
        console.log("Would you like an upgrade?")
    }
    else{
        console.log("Are you satisfied with the car?")
    }
}else if(boughtTesla && !isUSCitizen)
{
    console.log("Would you like to move to the US?")
}
else{
    console.log("Are you interested in buying Tesla?")
}


