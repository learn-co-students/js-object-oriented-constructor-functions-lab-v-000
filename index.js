// Create a constructor function for each of the following:
// + Scooter with `year`, `color`, and `model` properties
// + Driver with `name`, `age`, and `experience` properties
// + PickupLocation with `address` and `city` properties

function Scooter(year,color,model){
  this.year = year;
  this.color = color;
  this.model = model;
}

function Driver(name,age,experience){
  this.age = age;
  this.name = name;
  this.experience = experience;
}

function PickupLocation(address,city){
  this.address = address;
  this.city = city;
  
}