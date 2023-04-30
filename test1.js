function solution(A) {
  let smallestMissing = 1;
  const sortedArray = A.filter((element) => element > 0).sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === smallestMissing) {
      smallestMissing++;
    } else if (sortedArray[i] > smallestMissing) {
      return smallestMissing;
    }
  }
  return smallestMissing;
}
