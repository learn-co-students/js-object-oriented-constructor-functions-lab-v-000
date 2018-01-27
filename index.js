function Scooter(year, color, model){
  this.year = year;
  this.color = color;
  this.model = model;
}

camry = new Scooter(1998, "Camry", "Black");

function Driver(name, age, experience){
  this.name = name;
  this.age = age;
  this.experience = experience;
}

kyle = new Driver(2018, 26, 2);

function PickupLocation(address, city){
  this.address = address;
  this.city = city;
}

