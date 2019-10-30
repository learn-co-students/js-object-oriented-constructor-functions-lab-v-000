function Scooter (year, color, model){
  this.year = year;
  this.color = color;
  this.model = model;
};

new Scooter;

function Driver (name, age, experience){
  this.name  = name;
  this.age = age;
  this.experience = experience;
};

new Driver;

function PickupLocation (address, city){
  this.address = address;
  this.city = city;
};

new PickupLocation;
