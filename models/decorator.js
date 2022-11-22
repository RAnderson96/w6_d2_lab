const Decorator = function () {
    this.paintStock = [];

}

Decorator.prototype.addPaint = function (paint) {
    this.paintStock.push(paint)
}


Decorator.prototype.totalPaint = function() {
    let paintTotal;
    for (item of this.paintStock) {
        paintTotal = paintTotal + item.litres
    }
    return paintTotal


}

Decorator.prototype.enoughPaint = function(room) {
    const requiredLitres = (room.area)/6.5;
    let ourPaint = this.totalPaint()
    
    if (ourPaint > requiredLitres) {
        return true;
    }
    else {
        return false;
    }
}



module.exports = Decorator;