const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('Decorator', function (){
    let decorator;
    let paint1;
    let paint2;
    let room1;
    beforeEach(function (){
        decorator = new Decorator();
        paint1 = new Paint(50);
        paint2 = new Paint(50);
        room1 = new Room(10);


    });

    it('should have empty stock', function() {
        const actual = decorator.paintStock;
        
        assert.deepEqual(actual, [])
    });
    it('should be able to add a can of paint to stock', function() {
        decorator.addPaint(paint1)
        const actual = decorator.paintStock;
        
        assert.deepStrictEqual(actual, [paint1])
    });
    it('should be able to add a can of paint to stock and have number of litres', function() {
        decorator.addPaint(paint1)
        const actual = decorator.paintStock[0].litres;
        
        assert.strictEqual(actual, 50)
    });
    it('should be able to calculate total litres of paint', function() {
        decorator.totalPaint()
        const actual = 100
        
        assert.strictEqual(actual, 100)
    });    
    it('should be able to check if there is enough paint for a selected room', function() {
        decorator.enoughPaint(room1);
        const actual = true;
        
        assert.strictEqual(actual, true)
    }); 
    
});