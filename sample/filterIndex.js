const sampleArray = [1, 10, 4, 9, 12, 11, 15, 21, 23, 8];
const resultIndex = sampleArray.flatMap((s, i) => (s % 2 === 0 ? i : []));
console.log(resultIndex);
