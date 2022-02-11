function deleteNth(your_array, limit) {
  new_arr = [];
  var counts = {};
  your_array.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
    if (counts[x] <= limit) {
      new_arr.push(x);
    }
  });
  return new_arr;
}

your_array = [1, 1, 3, 3, 7, 2, 2, 2, 2];
limit = 3;
new_arr = deleteNth(your_array, limit);
console.log(new_arr);
