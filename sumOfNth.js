const SeriesSum = (n) => {
  let result = 0;
  let divider = 1;
  for (let i = 0; i < n; i += 1) {
    if (i === 0) {
      result = 1;
    } else {
      divider = divider + 3;
      result = result + 1 / divider;
    }
  }
  return result.toFixed(2);
};
