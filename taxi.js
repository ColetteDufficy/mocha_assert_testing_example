const Taxi = function(manufacturer, model, driver){
    this.manufacturer = manufacturer;
    this.model = model;
    this.driver = driver;
    this.passengers = [];
}

Taxi.prototype.numberOfPassengers = function () {
    return this.passengers.length;
}

Taxi.prototype.addPassenger = function (passenger) {
    this.passengers.push(passenger)
    return this.passengers.length;
}

Taxi.prototype.removePassengerByName = function ( passenger) {
    const indexOfPassenger = this.passengers.indexOf(passenger);
    this.passengers.splice(indexOfPassenger, 1);
}



Taxi.prototype.removeAllPassengersFromTaxi = function () {
        while (this.passengers.length > 0){
            this.passengers.pop()
            } 

    // this.passengers = []
    // this.passengers.length = 0
}

// alterntave way to execute:
Taxi.prototype.removeAllPassengers = function () {
    this.passengers.splice(0, this.numberOfPassengers());
  }






module.exports = Taxi;