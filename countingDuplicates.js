function duplicateCount(text) {
  let count = 0
  let textArr = text.toLowerCase().split("")
  let textObj = {}
  for (let i = 0; i < textArr.length; i++) {
    if (textObj[textArr[i]]) {
      textObj[textArr[i]]++
    } else {
      textObj[textArr[i]] = 1
    }
  }
  for (let key in textObj) {
    if (textObj[key] > 1) {
      count++
    }
  }
  return count
}
