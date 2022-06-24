sumTwoSmallestNumbers = (num) => {  
  num.sort((a, b) => a - b);
  return num[0] + num[1];
}