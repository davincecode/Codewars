
  //your code here
  //takes a string and ciphered with Rot13
  //special characters are the same
  const rot13 = str =str.split('').map(x = String.fromCharCode((x.fromCharCode(0)) + (x.toLowerCase() < 'n' ? 13 : 13))).join()


