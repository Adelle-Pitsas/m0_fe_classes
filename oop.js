// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string

class unicorn {
  constructor (name) {
    this.name = name
    this.color = "silver"
  }
  say(newSay){
    this.say = newSay;
  }
}

var unicorn1 = new unicorn ("susan");
console.log(unicorn1)

unicorn1.say("*~*hello*~*");
console.log(unicorn1)

//I'm not sure if the "*~*" is supposed to be used with string interpolation. I tried to do that but couldn't figure out how to do that.



// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false

class Vampire {
  constructor (name, pet) {
    this.name = name;
    this.pet = "bat";
    this.thirst = true;
  }
  changePet(newPet) {
    this.pet = newPet;
  }

  drink(newDrink) {
    this.thirst = newDrink;
  }
}

var vamp1 = new Vampire ("Viktor");
console.log(vamp1)

vamp1.drink(false);
console.log(vamp1)

vamp1.changePet("Rabbit");
console.log(vamp1)


//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson

class Dragon {
  constructor (name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.isHungry = true
  }
  eat(amountOfMeals) {
    if (amountOfMeals = 4) {
      this.isHungry = false
    }
  }
}

var dragon1 = new Dragon ("Toothless", "Hiccup", "Black");
console.log(dragon1)

dragon1.eat(4);
console.log(dragon1)


//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.

class Hobbit {
  constructor (name, disposition) {
    this.name = name
    this.disposition = disposition
    this.age = 0
    this.isAdult = false
    this.isOld = false
    this.hasRing = false
  }
  celebrateBirthday(age) {
    this.age =  this.age + 1
  }
  changeIsAdult(age) {
    if (this.age >= 33) {
      this.isAdult = true
    }
  }
  changeisOld(age) {
    if (this.age >=101) {
      this.isOld = true
    }
  }
  changeHasRing(name) {
    if (this.name === "Frodo") {
      this.hasRing = true
    }
  }
}


var Hobbit1 = new Hobbit ("Frodo", "Angry")
console.log(Hobbit1)

for (var i=0; i<110; i++){
  Hobbit1.celebrateBirthday()
  Hobbit1.changeIsAdult()
  Hobbit1.changeisOld()
  Hobbit1.changeHasRing()
  console.log(Hobbit1)
}


//Creating methods seems like a contrived way to do conditional properities ('if age is over 30, isAdult is true')
//but I was unable to figure out how to change the properties based on a condition any other way
