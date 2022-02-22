// function lovefunc(flower1, flower2) {
//   if (flower1 % 2 === 0 && flower2 % 2 === 1) {
//     return true;
//   }
//   if (flower1 % 2 === 1 && flower2 % 2 === 0) {
//     return true;
//   }
//   if (flower1 % 2 === 1 && flower2 % 2 === 1) {
//     return false;
//   }
//   if (flower1 % 2 === 0 && flower2 % 2 === 0) {
//     return false;
//   }
// }

//refactored
// function lovefunc(flower1, flower2) {
//   if ((flower1 % 2) + (flower2 % 2) === 1) {
//     return true;
//   } else {
//     return false;
//   }
// }

//refactored function
const lovefunc = (flower1, flower2) =>
  (flower1 % 2) + (flower2 % 2) === 1 ? true : false;
