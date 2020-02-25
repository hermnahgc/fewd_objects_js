// Define a constructor function template for hotels
class Car {
    constructor(brand, stock, booked) {
        // Object properties
        this.brand = brand;
        this.stock = stock;
        this.booked = booked;
        this.checkAvailablity = function () {
            return this.stock - this.booked;
        };
        this.checkAvailablityCar = function () {
            return this.stock;
        };
    }
}

// Define to instances of the hotel and their arguments
var bmwCar = new Car('BMW', 5, 2);
var mercedesCar = new Car('Mercedes', 7, 4);
var ferrariCar = new Car('Ferrari', 2, 1);

// Declare a variable to hold the name of the hotel and room availability 
var details1 = bmwCar.brand + ' stock: ';
    // add content to an existing variable----
    details1 += bmwCar.checkAvailablity() + mercedesCar.checkAvailablityCar() ;
// Get the hotel1 div
var elCar1 = document.getElementById('car');
// Add the variables created onto the empty div
elCar1.textContent = details1;

var details2 = mercedesCar.brand + ' stock: ';
    details2 += mercedesCar.checkAvailablity();
var elCar2 = document.getElementById('car2');
elCar2.textContent = details2;

var details3 = ferrariCar.brand + ' stock: ';
    details3 += ferrariCar.checkAvailablity();
var elCar3 = document.getElementById('car3')
elCar3.textContent = details3;    
