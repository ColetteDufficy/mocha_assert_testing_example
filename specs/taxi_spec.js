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

    describe('passengers', function() { //mocha functions
        it('should start with no passengers', function() {
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, []);
        });

        it('should be able to return the number of passengers', function() {
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 0)
        });

        it('should be able to add passengers', function () {
            taxi.addPassenger('Charles');
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 1)
        });

        it('should be able to remove a specific passenger', function () {
            taxi.addPassenger('Camilla');
            taxi.addPassenger('Charles');
            taxi.removePassengerByName('Charles');
            const expected = ['Camilla']
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, expected)
        });



        it('should be able to remove all passengers from the taxi', function () {
            taxi.addPassenger('Camilla');
            taxi.addPassenger('Charles');
            taxi.removeAllPassengersFromTaxi();
            const expected = []
            const actual = []
            assert.deepStrictEqual(actual, expected)
        });

        // alterntave way to execute:
        it('should be able to remove all passengers', function () {
            taxi.addPassenger('Mike');
            taxi.addPassenger('Lucas');
            taxi.removeAllPassengers();
            const actual = taxi.numberOfPassengers();
            assert.strictEqual(actual, 0);
          });

    });
});


