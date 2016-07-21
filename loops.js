function breakOut(array, changeValue, stopValue) {
  var l = array.length 
  for(let i = 0; i < l; i++) {
    if (array[i] === stopValue) {
      break 
    }
    array[i] = changeValue
  }

  return array 
}

function keepGoing(array, changeValue, skipValue) {
  var l = array.length 
  for(let i = 0; i < l; i++) {
    if (array[i] === skipValue) {
      continue 
    }
    array[i] = changeValue
  }

  return array 
}

function findBy(array, findFn) {
   var l = array.length 
  for(let i = 0; i < l; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null 
}