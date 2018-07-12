const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function (car) {
    // cart length increases by 1 on each call
    // car object appears at the end of the cart array
    // the method has a single argument: the car object that is being added
    // total property increases by the car object's price on each call
      this.cart.push(car);
      this.total += car.price;
  
  },

  removeFromCart: function (index, price) {
    // This test should expect the cart length to decrease by 1 on each call.
    // This test should expect the cart array to maintain the order of car objects in the cart array.
    // The first argument should be the index of the car object in the cart array.
    // The second argument should be the price property's value on the car object.
    // This test should expect the total property to decrease by the car object's price on each call.
      this.total -= price
      this.cart.splice(index, 1)
  },

  checkout: function () {
    // This test should expect the cart length to equal 0
    // This test should expect the total property to equal 0
     this.cart = [];
     this.total = 0;
  }
};