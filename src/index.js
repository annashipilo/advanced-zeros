module.exports = function getZerosCount(number, base) {
    var n = parseInt(number);
    for (var i = 2; i <= base; i++) {
        if (base % i == 0) {
            var p = 0;
            while (base % i == 0) {
                p++;
                base = parseInt(base / i);
            }
            var count = 0;
            var num = number;
            while (num / i > 0) {
                count = parseInt(count + num / i);
                num = parseInt(num / i);
            }
            n = Math.min(n, count / p);
        }
    }
    return parseInt(n);
}
