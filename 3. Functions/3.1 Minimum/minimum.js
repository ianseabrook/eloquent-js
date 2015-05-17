/*
Minimum

The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.
*/

// Your code here.

function min(value1, value2){
  if (value1 < value2) {
    return value1;
  } else {
    return value2;
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
