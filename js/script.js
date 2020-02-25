var car = {
    // Object properties
    brand: 'BMW',
    stock: 5,
    booked: 2,
    automatic: true,
    modelTypes: ['Gran Couple', 'Gran Turism', 'Alpina'],
    checkAvailablity: function() {
        return this.stock - this.booked;
    }
};

var elBrand = document.getElementById('car');
elBrand.textContent = car.brand;

var elStock = document.getElementById('stock');
elStock.textContent = car.checkAvailablity();

