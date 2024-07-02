//Write a “person” class to hold all the details.
class person {
  constructor(firstname, lastname, age, gender) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
  }
}
const pe = new person("RRR", "Vijayanthi", "25", "male");

console.log(pe);

//write a class to calculate the Uber price.

class price {
  constructor(pickup, destination, rent, tax) {
    this.pickup = pickup;
    this.destination = destination;
    this.rent = rent;
    this.tax = tax;
    this.total = rent + tax;
  }
}
const pr = new price("Gachibowli", "Hitechcity", 100, 35);
console.log(pr);
