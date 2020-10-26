
let p1 = {
    name: "Ali",
    age: 23,
    city: "Israel"
}

let p2 = {
    name: "Zina",
    age: 23,
    city: "Israel"
}

if(p1.age == p2.age)
{
    if(p1.city == p2.city)
    {
        console.log( p2.name + " wanted to date " + p1.name)
    }
    else{
        console.log(p2.name +  " wanted to date " + p1.name + ", but couldn't")
    }
}


//////////////////////////////

const myList = [ 
    {item: "mac", color: "grey", size: 13}, 
    {item: "iphone", color: "black", size: 5.5}
] 
// console.log(myList)


myList[0].color = "gold"
myList.splice(1, 1)
console.log(myList)


//////////////////////////////


const myArray = [ 
    {fName: "Daniel", lName: "Alves", age: 33}, 
    {fName: "Michael", lName: "Jordan", age: 40}
] 

myList.push(...myArray)
console.log(myList)


//////////////////////////////



let library = {
    books: [
        {title: "Rhythm of War", Author: "Brandon Sanderson"},
        {title: "To My Country", Author: "Ben Lawson"},
        {title : "How Things Work", Author: "Conrad Mason"}
    ]
}

myList.push(...library.books)
console.log(myList)


//////////////////////////////



const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
const name = prompt('Please enter the name for your reservation');

let newName = name.toLowerCase()

if(newName == "bob" || newName == "ted")
{
    newName = newName[0].toUpperCase() + newName.slice(1)
    if(reservations[newName].claimed==false)
    {
        alert("Welcome, " + name);
    }else{
        alert("Hmm, someone already claimed this reservation")
    }
}else{
    alert("You have no reservation")
    reservations[name] = {claimed: true}
}

console.log(reservations)

//////////////////////////////



const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false, 
    fridge: {
        price: 500,
        works: false,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven
const owner = kitchen.owner
const fridgePrice = kitchen.fridge.price
const isFridgeWork = kitchen.fridge.works
const cheese = kitchen.fridge.items[0].name
const cheeseExpiryDate = kitchen.fridge.items[0].expiryDate
const raddish = kitchen.fridge.items[1].name
const raddishExpiryDate = date - kitchen.fridge.items[1].expiryDate 
const bread = kitchen.fridge.items[2].name
const breadExpiryDate = date - kitchen.fridge.items[2].expiryDate


if(hasOven && isFridgeWork)
{
    console.log(owner + "'s " + raddish + " expired " +  raddishExpiryDate + " day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the " +  raddish +  " in.")
}else if(!hasOven && isFridgeWork)
{
    console.log(owner + "'s " + raddish + " expired " +  raddishExpiryDate + " day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the " +  raddish  + " in.")

}else if(hasOven && !isFridgeWork)
{
    console.log(owner + "'s " + raddish + " expired " +  raddishExpiryDate + " day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the " + raddish + " in. And she'll have to pay " + fridgePrice/2 +  " to fix the fridge.")
}else 
{
    console.log(owner + "'s " + raddish + " expired " +  raddishExpiryDate + " day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the " +  raddish  + " in. And she'll have to pay " + fridgePrice/2 +  " to fix the fridge.")

}


