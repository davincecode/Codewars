function arrayDiff(a, b) {
  let arr = [];

  a.forEach((el) => {
    if (!b.includes(el)) {
      arr.push(el);
    }
  });

  return arr;
}
