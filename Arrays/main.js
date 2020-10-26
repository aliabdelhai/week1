
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const newGenes = []
const firstTwoGenes = genes.splice(0, 2)
const lastOne = genes.splice(genes.length - 1)
newGenes.push(...firstTwoGenes)
newGenes.push(...lastOne)
newGenes.push(genes[0])
newGenes.push(genes[1], genes[1]) 
newGenes.unshift("FXT")

console.log(newGenes)


//////////////////////////////


let car = {
    color: "white",
    numWheels: 4,
    isFancy: true
}
// The white car has 4 wheels. It is fancy
if(car.isFancy){
    console.log("The " + car.color + " car has " + car.numWheels + " wheels. It is fancy")
}
// The white car has 4 wheels. It is not fancy

else{
    console.log("The " + car.color + " car has " + car.numWheels + " wheels. It is not fancy")

}

////////////////////////

let apple = {
    item: "mac",
    toBiginning: true,
    items: ["ipad", "iphone", "apple watch", "airpods"]
}

if(apple.toBiginning)
{
    apple.items.unshift(apple.item)
}
else{
    apple.items.push(apple.item)
}

console.log(apple.items)


///////////////////////////


const human = {
    age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"

// human.name = babyNameValue

human[babyNameKey] = babyNameValue
console.log(human)

human[babyNameKey] = "Ali"
console.log(human)

/////////////////////

let person = {
    firstName: "Dopple",
    lastName: "Ganger"
  }
  
  let p = person
  p.firstName= "Chappy"
  
  console.log(p)
  console.log(person)


  
