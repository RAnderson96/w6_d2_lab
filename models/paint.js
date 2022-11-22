const Paint = function (litres){
    this.litres = litres
    this.isFull = true;
}

Paint.prototype.usePaint = function () {
    this.isFull = false;
}






module.exports = Paint;