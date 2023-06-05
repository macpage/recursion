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

// Mergesort
let array = [7, 3, 4, 1, 6, 2, 9, 8];
function merge_sort(arr) {
  if (arr.length < 2) {
    return;
  } else {
    let left = arr.slice(0, arr.length / 2);
    let right = arr.slice(arr.length / 2);

    let i = 0;
    let j = 0;
    let save = [];
    console.log(left);
    console.log(right);

    while (i + j < left.length + right.length) {
      if (left[i] < right[j]) {
        save[i + j] = left[i];
        i++;
      } else {
        save[i + j] = right[j];
        j++;
      }
    }

    return (array = save);
  }
}
merge_sort(array);
console.log(array);
