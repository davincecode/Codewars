function isPalindrome(text) {
  const str = text.toString();
  let reversed = [];
  for (let item of str) {
    reversed = item + reversed;
  }
  if (reversed == str) {
    return true;
  } else {
    return false;
  }
}

//refactored function
const isPalindrome = (x) => x == x.toString().split("").reverse().join("");
