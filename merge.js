function merge(first, second) {
  let result = [];
  let pointerA = 0;
  let pointerB = 0;

  while (pointerA < first.length && pointerB < second.length) {
    if (first[pointerA] < second[pointerB]) {
      result.push(first[pointerA]);
      pointerA += 1;
    } else {
      result.push(second[pointerB]);
      pointerB += 1;
    }
  }

  while (pointerA < first.length) {
    result.push(first[pointerA]);
    pointerA += 1;
  }

  while (pointerB < second.length) {
    result.push(second[pointerB]);
    pointerB += 1;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort };
