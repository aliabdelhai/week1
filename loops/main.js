let names = ["Ali", "Tamir", "Omneya", "Shahd", "Dania"]
let ages = [23, 20, 27, 25, 10]

for(let i=0; i < names.length; i++)
{
    console.log(`${names[i]} is ${ages[i]} years old`)

}

////////////////////////

const numbers = [7, 3, 2, 8, 10]
let sum = 0
for(let num of numbers)
{
    sum += num

}
console.log(sum)

////////////////////////

let avg = sum/numbers.length
console.log(avg)

////////////////////////


let nums = []
for(let i=0; i<100; i++)
{
    nums[i]=i+1
}

console.log(nums)

////////////////////////


for(let numb of nums)
{
    if(numb % 2 != 0)
    {
        console.log(numb)
    }
}

////////////////////////


nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

for(let k=0; k<nums.length; k++)
{
    if(nums[k] == 709)
    {
        console.log(k)
    }
}

////////////////////////


names = ["Ashley", "Donovan", "Lucas"]
ages = [23, 47, 18]
const people = []

for(let t = 0; t<names.length; t++)
{
    people[t] = {name: names[t], age: ages[t]}
}
console.log(people)

////////////////////////


for(let person of people)
{
    console.log(`${person.name} is ${person.age} years old`)
}  
  
////////////////////////


let posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
]

for(let post in posts)
{
    if(posts[post].id == 2)
    {
        posts.splice(post, 1)
    }
}
console.log(posts)

////////////////////////

posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]

  console.log(posts)

  for(let p=0; p<posts.length; p++)
  {
      if(posts[p].id == 2)
      {
          for(let c = 0; c<posts[p].comments.length; c++)
          {
              if(posts[p].comments[c].id == 3)
              {
                    posts[p].comments.splice(c, 1)
              }
          }
      }

  }

  console.log(posts)


////////////////////////


  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

  let keys = Object.keys(dictionary)
  console.log(keys)

  for(let key of keys)
  {
      console.log(`Words that begin with ${key}:`)
      for(let d=0; d < dictionary[key].length; d++)
      {
            console.log(dictionary[key][d])
      }
  }


  ////////////////////////




