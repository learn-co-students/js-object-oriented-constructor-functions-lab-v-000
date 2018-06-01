function Scooter(year, color, model) {
  this.year = year
  this.color = color
  this.model = model
};

let samson = new Scooter(2015, 'red', 'swoosh')

function Driver(name, age, experience) {
  this.name = name
  this.age = age
  this.experience = experience
};

let beyonce = new Driver('beyonce', '36 years', '21 years');

function PickupLocation(address, city) {
  this.address = address
  this.city = city
};
