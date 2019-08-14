const Scooter = function(year, color, model) {
  this.year = year
  this.color = color
  this.model = model
}

const Driver = function(name, age, experience) {
  this.name = name
  this.age = age
  this.experience = experience
}

    // don't have to call const to make constructor function. example ->
function PickupLocation(address, city) {
  this.address = address
  this.city = city
}
