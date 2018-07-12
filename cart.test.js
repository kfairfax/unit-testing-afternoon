const cart = require('./cart');
// When we require cart.js, we gain access to all of its exported methods and properties. You can view how many methods and properties there are by opening cart.js. 
const cars = require('./data/cars.js');

//create test groups by using the describe keyword with Jest.
//group the test cases specifically for the two cart properties into a group called Cart Properties
// group the test cases specifically for the three methods into a group called Cart Methods

describe('Cart Properties', () => {
    // The first argument for describe is the name of the group
    // the second argument is a callback function that holds all the test cases
    test('Cart should be an array and empty', () => {
        expect(Array.isArray(cart.cart)).toEqual(true);
        expect(cart.cart.length).toEqual(0);
    });

    test('Total should equal 0; an integer', () => {
        expect(cart.total).toEqual(0);
    })
})



describe('Cart Methods', () => {
    // When testing the methods in cart.js, reset the cart and total properties after each test
    // to do this, use the afterEach Jest method
    // for this method, the first argument is a callback function. This function will be called after each test
    afterEach(() => {
        cart.cart = [];
        cart.total = 0;
    })
    
    test('addToCart method makes cart length increases by 1 on each call', () => {
        // This test should expect the cart length to increase by 1 on each call.
        // This test should expect the car object to appear at the end of the cart array.
        // This method should have a single argument: the car object that is being added.
        cart.addToCart(cars[0]);
        // one car is added to index = 0 in the cart array
        cart.addToCart(cars[1]);
        //another car is added to index = 1 in the cart array
        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[1]);
    });

    test('addToCart method increases total by car price', () => {
        // This test should expect the total property to increase by the car object's price on each call
        cart.addToCart(cars[0]);
        expect(cart.total).toEqual(cars[0].price);
    });

    test('removeFromCart removes car object from cart array', () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])
        // This method should have two arguments:
        // The first argument should be the index of the car object in the cart array.
        // The second argument should be the price property's value on the car object.
        cart.removeFromCart(0, cars[0].price);
        // This test should expect the cart length to decrease by 1 on each call.
        expect(cart.cart.length).toEqual(1);
        expect( cart.cart[0] ).toEqual( cars[1] );

    })
    test('removeFromCart should remove car price from total', () =>{

        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.removeFromCart(0, cars[0].price)
        expect(cart.total).toEqual(cars[1].price)
        // This test should expect the total property to decrease by the car object's price on each call.
    })



    test('checkout expects cart length to be 0, total to be 0', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.checkout();
        // add a random number of cars to the cart and then call the checkout method
        expect(cart.cart.length).toEqual(0);
        // This test should expect the cart length to equal 0
        expect(cart.total).toEqual(0);
        // This test should expect the total property to equal 0.
    })
})


