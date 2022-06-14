class Person {
  constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(...people) {
    if (!(Array.isArray(...people))) {
      console.log("introducePeople only takes an array as an argument.");
    } else  if (!(people instanceof Person)) {
      console.log("All items in array must be Person class instances.");
    } else {
      people.forEach(function(person) {
        console.log(this.person.introduce());
      });
    }
  }
}

const me = new Person ('Adam', 'Kincer', 22);

//me.introduce();

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}