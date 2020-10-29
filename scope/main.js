//===================================================================================
//Section 1
//===================================================================================
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running") // running 8 times
    }
    console.log("Finished running " + distance + " miles") // Finished running 8 miles
}
 
console.log("Damn, you see this gal? She ran " + distance + " miles")  // Error! --> distance is not defined 



//==   =//Section 2//===================================================================================
if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound) // Error: cowSound is not defined!
}


//===================================================================================
//Section 3
//===================================================================================
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder) // Served a special fish, Served a special lettuce plate, Served a special curious cheese.
    }

    console.log("Finished serving all the orders: " + orders) // Finished serving all the orders: fish, lettuce plate, curious cheese
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)



//===================================================================================
//Section 4
//===================================================================================
const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant() // Error cause seed is not defined at plant




//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found // Error  found is not defined at doesUserExist
}

const userExists = doesUserExist("Lucius") 
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}


//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true // Error -> Assignment to constant variable at makeEnough
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}

