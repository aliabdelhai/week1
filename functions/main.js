const calcAge1 = function(currYear, birthYear)
{
    const age1 = currYear - birthYear
    return age1
}
const age1 = calcAge1(2017, 1989)
console.log(age1)


/////////////////////////////////////////

const calcAge2 = function(currYear, birthYear)
{
    const age2 = currYear - birthYear
    console.log(`You are either ${age2-1} or ${age2}`)
}

const age2 = calcAge2(2018, 2015)


///////////////////////////////////////////


const  isEven = function(number)
{
    if(number % 2 == 0)
    {
        return true
    }
    else{
        return false
    }
}

console.log(isEven(5))


///////////////////////////////////////////


const oddNumbers = function(arr)
{
    for(let num of arr)
    {
        if(!isEven(num))
        {
            console.log(num)
        }
    }
}

const arr = [1,2,3,4,5,6,7,8,9]
oddNumbers(arr)



///////////////////////////////////////////



const checkExists = function(arr, number)
{
    for(let num of arr)
    {
        if(num == number)
        {
            return true
        }
    }
    return false
}

console.log(checkExists([1,2,3], 5))


///////////////////////////////////////////


const calculator = {
    add: function(num1, num2){
        return num1 + num2
    },
    subtract: function(num1, num2){
        return num1 - num2
    }
}

const result1 = calculator.add(20, 1) // 21
const result2 = calculator.subtract(30, 9) // 21

console.log(calculator.add(result1, result2)) // 21+21 = 42


///////////////////////////////////////////


const increaseByNameLength = function(money, name)
{
    return name.length * money
}

const makeRegal = function(name)
{
    return "His Royal Highness, " + name
}

const turnToKing = function(name, money){
    name = name.toUpperCase() // MARTIN LUTHER
    money = increaseByNameLength(money, name) // 100 --> 1300
    name = makeRegal(name) // His Royal Highness, MARTIN LUTHER

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) 


///////////////////////////////////////////


const removeAllfromIndex = function(arr, index, n)
{
    const deleteArr = []
    let deleteNum
    let c = n
    let flag= false
    let newArray = arr.length
    let f = 0
    for(let i=0; i<newArray; i++)
    {
        if(n==undefined)
        {
            if(i == index || flag == true)
            {
                deleteNum = arr.pop()
                deleteArr.unshift(deleteNum)
                flag = true
            }  
        }
        else{
            if(index!=newArray-f-1)
            {
                arr.unshift(arr.pop())
                f++
            }
            else{
                deleteNum = arr.pop()
                deleteArr.unshift(deleteNum)
            }
               

        }
        
    }
    return deleteArr
}
   

const addElements = function(array, index, deleteNums, addNum1, addNum2)
{
    let newArr = array.length
    let deletedArr = []
    for(let u = 0; u<newArr; u++)
    {
        if(addNum2 == undefined && deleteNums == 0)
        {
            if(u != index)
            {
                array.push(array.pop())
            }
            else{
                array.unshift(addNum1)
    
            }
            return deletedArr
        }
        else if(addNum2 == undefined && deleteNums == 1)
        {
            if(u != index)
            {
                array.unshift(array.pop())
            }
            else{
                array.pop()
                array.unshift(addNum1)
        
            }
        }
        else
        {
            if(addNum2 != undefined)
            {
                if(u != index)
                {
                    array.push(array.pop())
                }
                else{
                    array.unshift(addNum1, addNum2)
    
                }
            }
        }

    }

}


const splice = function(array, index, deleteNums, addNum1, addNum2){
    if(addNum1 == undefined && addNum2 == undefined)
    {
        let deleteArr = removeAllfromIndex(array, index, deleteNums)
        return deleteArr
    }
    else 
    {
        let deletedArr = addElements(array, index, deleteNums, addNum1, addNum2)
        return deletedArr
    }
    

}

3

// remove 1 element
let arr1 = [1,2,3]
splice(arr1, 0,1); 
console.log(arr1); //should be [2,3]


// add 1 element
arr2 = [1,2,3]
splice(arr2, 0,0,0); 
console.log(arr2); //should be [0,1,2,3]


// add 2 elements
arr3 = [1,2,3]
splice(arr3,0,0,-1,0); 
console.log(arr3); //should be [-1,0,1,2,3]


// replace 1 element
arr4 = [1,2,3]
splice(arr4,1,1,55); 
console.log(arr4); //should be [1,55,3] 


// delete all elements from index to end
arr5 = [1,2,3,4,5]
splice(arr5,1); 
console.log(arr5); //should be [1] 


// returns array of deleted elements
arr6 = [1,2,3]
let deleted = splice(arr6,1); 
console.log(deleted); //should be [2,3] 


// returns an array of the deleted element (1 element)
arr7 = [1,2,3]
deleted = splice(arr7,1,1); 
console.log(deleted); //should be [2] 


// returns an empty array when no elements are deleted
arr8 = [1,2,3]
deleted = splice(arr8,1,0,5); 
console.log(deleted); //should be [] 













//////////////////////////////////////


people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
]



const getAge = function(age)
{
    if(age < 21)
    {
        return "an Underage"
    }
    else if(age > 55)
    {
        return "a 55+"
    }
    else
    {
        return `${age} years old`
    }

}

const profession = function(profession)
{
    return profession
}

const countrAndCity = function(country, city)
{
    capitalizeCounty = capitalize(country)
    capitalizeCity = capitalize(city)
    return ` from ${capitalizeCity}, ${capitalizeCounty}.`

}

const catchphrase = function(catchphrase, name)
{
    return ` ${capitalize(name)} loves to say "${catchphrase}"`
    
}

const capitalize = function(str){
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    if(words.length == 1)
    {
        return words
    }
    else{
        return words[0] + " " + words[1]
    }
    
}

const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` 
    summary += capitalize(profession(person.profession))
    summary += countrAndCity(person.country, person.city)
    summary += catchphrase(person.catchphrase, person.name)
    return summary
}


for(let p = 0 ; p<people_info.length; p++)
{
    console.log(getSummary(people_info[p]))
}



const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}



const cleanText = function(sentence){
    for(let s of specialChars)
    {
        sentence.split(s).join("")
        
    }
    sentence = sentence.toLowerCase()
    sentence = sentence.split(" ")
    return sentence

}  


const addToCounter = function(word){
    if(!wordCounts[word])
    {
        wordCounts[word] = 1
    }
    else{
        wordCounts[word]++
    }

}


const countWords = function(sentence)
{
    sentence = cleanText(sentence)
    console.log(cleanText(story))

    for(let word of sentence)
    {
        addToCounter(word)

    }
}

countWords(story)

console.log(wordCounts)

