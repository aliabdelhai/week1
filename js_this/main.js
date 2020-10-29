
const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        this.hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }
  
  person.feed() //should alert "I'm no longer hungry"


  /////////////////////////////////////////////////


  const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2); 
  console.log('Audi should have 5 liters: ',  garage.car1.liters); 
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);


  ///////////////////////////////////////////



  const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  const airplane = {
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    },
    fuel: 0
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());





  ////////////////////////////////////////////




  const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },
    stealCoins: function(num){
        this.coinCount -= num
    }
  };


  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);



  /////////////////////////////////////////////////



  const revealSecret = function () {
    return this.secret;
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result);
  };
  
  const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
  };
  
  const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);



  //////////////////////////////////////////////////



  const coffeeShop = {
    beans: 40, // 1 beans -> 1 shekel
    money: 100, // in shekel
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },

    buyBeans: function(numBeans){
        if(this.money > numBeans)
        {
            this.beans += numBeans
            this.money -= numBeans
        }
        else{
            alert("You don't have enough money")
        }

    },
  
    makeDrink: function (drinkType) {
      if(drinkType !=  Object.keys(this.drinkRequirements)[0] && drinkType !=  Object.keys(this.drinkRequirements)[1] && drinkType !=  Object.keys(this.drinkRequirements)[2] && drinkType !=  Object.keys(this.drinkRequirements)[3])
      {
          alert("Sorry, we don't make " + drinkType)
      }
      else{
          if(this.beans < this.drinkRequirements[drinkType])
          {
              alert("Sorry, we're all out of beans!")
              this.buyBeans(10)

          }
          console.log(this.beans)
          this.beans -= this.drinkRequirements[drinkType]
          console.log(this.beans)
      }
    }
  }
  
  coffeeShop.makeDrink("latte"); //beans = 30
  coffeeShop.makeDrink("americano"); // beans = 25
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot"); //beans = 10
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"



  /////////////////////////////////////////////////////////////////////



  const coffeeShop = {
    beans: 40, // 1 beans -> 1 shekel
    money: 0, // in shekel
  
    drinkRequirements: {
      latte: {beanRequirement: 10, price: 5},
      americano:{beanRequirement: 5, price: 2},
      doubleShot: {beanRequirement: 15, price: 10},
      frenchPress: {beanRequirement: 12, price:8}
    },

    buyBeans: function(numBeans){
        if(this.money > numBeans)
        {
            this.beans += numBeans
            console.log("beans: " + this.beans) 
            this.money -= numBeans
            console.log("money: " + this.money ) 
        }
        else{
            alert("You don't have enough money")
        }
    },

    buyDrink: function(drinkType)
    {
        if(drinkType !=  Object.keys(this.drinkRequirements)[0] && drinkType !=  Object.keys(this.drinkRequirements)[1] && drinkType !=  Object.keys(this.drinkRequirements)[2] && drinkType !=  Object.keys(this.drinkRequirements)[3])
        {
            alert("Sorry, we don't make " + drinkType)
        }
        else{
            this.money += this.drinkRequirements[drinkType].price
            console.log("money: " +this.money)
            this.makeDrink(drinkType)
        }
    },
  
    makeDrink: function (drinkType) {
        if(this.beans < this.drinkRequirements[drinkType].beanRequirement)
        {
            alert("Sorry, we're all out of beans!")
            this.buyBeans(this.drinkRequirements[drinkType].beanRequirement - this.beans)      
        }
        console.log("beans: "  + this.beans)
        this.beans -= this.drinkRequirements[drinkType].beanRequirement
        console.log("beans: " + this.beans)
      
    }
}
  

  coffeeShop.buyDrink("latte"); 
  coffeeShop.buyDrink("americano"); 
  coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.buyDrink("doubleShot"); 
  coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"


