const minMax = (arr) => {
  const { min, max } = arr.reduce(
    (result, currentValue) => {
      if (currentValue > result.max) {
        result.max = currentValue;
      } else if (currentValue < result.min) {
        result.min = currentValue;
      }
      return result;
    },
    { min: arr[0], max: arr[0] }
  );
  return [min, max];
};
