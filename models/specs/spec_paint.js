const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function (){
    let paint;
    beforeEach(function (){
        paint = new Paint(50);

    });

    it('should have a number of litres', function(){
        const actual = paint.litres;
        assert.strictEqual(actual, 50)
    });
    it('should be full', function(){
        const actual = paint.isFull;
        assert.strictEqual(actual, true)
    });
    it('should be able to empty', function(){
        paint.usePaint()
        const actual = paint.isFull;
        assert.strictEqual(actual, false)
    });
    it('should be able to empty', function(){
        paint.usePaint()
        const actual = paint.isFull;
        assert.strictEqual(actual, false)
    });
    
})