// sum of numbers
// if number is blank return 0

// Sum Numbers
function sum(numbers) {
  let total = 0;
  for (num of numbers) {
    total += num;
  }
  return total;
}

sum([1, 5.2, 4, 0, -1]);
