function findUniq(arr) {
  let sortArr = arr.sort();
  let result = 0;
  for (const num of sortArr) {
    if (num !== sortArr[1]) {
      result = num;
      return result;
    }
  }
  return result;
}
