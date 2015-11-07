function add(a, b) {
  var carry = 0,
    result = [],
    len = Math.max(a.length, b.length),
    i = len;
  while (i--) {
    carry += (+a[i - len + a.length] || 0) + (+b[i - len + b.length] || 0);
    result.unshift(carry % 10);
    carry = Math.floor(carry / 10);
  }
  while (carry) {
    result.unshift(carry % 10);
    carry = Math.floor(carry / 10);
  }
  return result.join("");
}
