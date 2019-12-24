function maxMultiple(divisor, bound) {
    var x = bound % divisor;
    console.log(x);
    return bound - x;
}
console.log(maxMultiple(3, 10));
console.log(maxMultiple(2, 7));
