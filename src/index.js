module.exports = function getZerosCount(number, base) {
    var n = parseInt(number);
    var num;
    var x;
    var count;
    for (var i = 2; i <= base; i++) {
        if (base % i == 0) {
            x = 0;
            while (base % i == 0) {
                x++;
                base = parseInt(base / i);
            }
            count = 0;
            num = number;
            while (num / i > 0) {
                count = parseInt(count + num / i);
                num = parseInt(num / i);
            }
            n = Math.min(n, count / x);
        }
    }
    return parseInt(n);
}
