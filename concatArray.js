const { template } = require('@babel/core')

function concatArray(array1, array2) {
  let array3;
  if (array1 === null || array1 === undefined) {
    if (array2 === null) {
      array3 = undefined;
    } else if (array2 === undefined) {
      array3 = undefined;
    } else {
      array3 = array2;
    }
  } else if (array2 === null || array2 === undefined) {
    if (array1 === null) {
      array3 = undefined;
    } else if (array1 === undefined) {
      array3 = undefined;
    } else {
      array3 = array1;
    }
  } else if (array1.length === 0) {
    if (array2.length === 0) {
      array3 = [];
    } else {
      array3 = array2;
    } 
  } else if (array2.length === 0) {
    if (array1.length === 0) {
      array3 = [];
    } else {
      array3 = array1;
    }
  } else {
    array3 = array1.concat(array2);
  }
  return array3;
}
module.exports = concatArray
