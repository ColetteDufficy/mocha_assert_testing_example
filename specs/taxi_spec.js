const assert = require('assert')
const Taxi = require('../taxi.js')


describe('Taxi', function() {
    let taxi;

    beforeEach(function() {                //mocha hook, so it deosnt require a string
        taxi = new Taxi('Toyota', 'Prius', 'Dave');
    }); 

    it('should have a manufacturer', function(){ //mocha functions
        // const taxi = new Taxi('Toyota', 'Prius');
        const actual = taxi.manufacturer;
        assert.strictEqual(actual, 'Toyota'); // assert functions
    });

    it('should have a model', function() {
        // const taxi = new Taxi('Toyota', 'Prius');
        const actual = taxi.model;
        assert.strictEqual(actual, 'Prius');
    });

    it('should have a driver', function() {
        const actual = taxi.driver;
        assert.strictEqual(actual, 'Dave' ); 
    });

    describe('passengers', function() {
        it('should start with no passengers', function() {
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, []);
        });
    });
});


