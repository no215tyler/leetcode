function romanToInt(s: string): number {
  const aryInt: string[] = s.split('').reverse();
  const resultAry: number[] = [];
  aryInt.forEach(roman => {
    resultAry.push(compileToInt(roman));
  })
  let resultNum = 0;
  resultAry.forEach((num, i) => {
    if (i == 0) {
      resultNum = num;
    } else if (num < resultAry[i - 1]) {
      resultNum -= num;
    } else {
      resultNum += num;
    }
  })
  return resultNum;
};

const compileToInt = (str: string): number => {
  let n: number = 0
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

console.log(romanToInt('III')); // => 3
console.log(romanToInt('LVIII')); // => 58
console.log(romanToInt('MCMXCIV')); // => 1994

// I: 1
// V: 5
// X: 10
// L: 50
// C: 100
// D: 500
// M: 1000
