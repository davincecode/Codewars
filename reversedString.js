function solution(str) {
  const splitStr = str.split("");
  const reverseStr = splitStr.reverse();
  const joinStr = reverseStr.join("");

  return joinStr;
}
