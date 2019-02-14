// Create a constructor function for Scooter with year, color, and model properties
// let samson = new Scooter(2015, "red", "swoosh");
function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}

// Create a constructor function Driver with name, age, and experience properties
// let allison = new Driver("Allison", "16 years", "2 years");
function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

// Create a constructor function for PickupLocation with address and city properties
// let poshHotel = new PickupLocation("123 Broadway", "New York City");
function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}
