function romanToInt(s) {
    var aryInt = s.split('').reverse();
    var resultAry = [];
    aryInt.forEach(function (roman) {
        resultAry.push(compileToInt(roman));
    });
    var resultNum = 0;
    resultAry.forEach(function (num, i) {
        if (i == 0) {
            resultNum = num;
        }
        else if (num < resultAry[i - 1]) {
            resultNum -= num;
        }
        else {
            resultNum += num;
        }
    });
    return resultNum;
}
;
var compileToInt = function (str) {
    var n = 0;
    switch (str) {
        case 'I':
            n = 1;
            break;
        case 'V':
            n = 5;
            break;
        case 'X':
            n = 10;
            break;
        case 'L':
            n = 50;
            break;
        case 'C':
            n = 100;
            break;
        case 'D':
            n = 500;
            break;
        case 'M':
            n = 1000;
            break;
        default:
            break;
    }
    return n;
};
console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
// I: 1
// V: 5
// X: 10
// L: 50
// C: 100
// D: 500
// M: 1000
