function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    let sum = 0;
    let str = i.toString();
    for (let j = 0; j < str.length; j++) {
      sum += Math.pow(str[j], j + 1);
    }
    if (sum === i) {
      arr.push(i);
    }
  }
  return arr;
}


// console.log((sumDigPow(1, 10)));