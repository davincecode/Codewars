function betterThanAverage(classPoints, yourPoints) {
  let result = 0;
  for (const num of classPoints) {
    result += num;
    total = result / classPoints.length;
  }
  if (total > yourPoints) {
    return false;
  } else {
    return true;
  }
}
