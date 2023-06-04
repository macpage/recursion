// Loop
function fibs(f) {
  let n = 0;
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i < f; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  console.log(arr);
}

fibs(8);

let arr = [];
// Function
function fibsRec(n) {
  if (n <= 3) {
    return (arr[n] = 1);
  } else {
    return (arr[n] = fibsRec(n - 2) + fibsRec(n - 1));
  }
}

console.log(fibsRec(8));
console.log(arr);
