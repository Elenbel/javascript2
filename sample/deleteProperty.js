// オブジェクト単体
const sampleObject = {
  rest1: "sample1",
  delete1: "sample2",
  rest2: "sample3",
  delete2: "sample4",
};
const { delete1, delete2, ...restObject } = sampleObject;
console.log(restObject);

// オブジェクトの配列
const sampleObjects = [
  {
    rest1: "sample1-1",
    delete1: "sample1-2",
    rest2: "sample1-3",
    delete2: "sample1-4",
  },
  {
    rest1: "sample2-1",
    delete1: "sample2-2",
    rest2: "sample2-3",
    delete2: "sample2-4",
  },
  {
    rest1: "sample3-1",
    delete1: "sample3-2",
    rest2: "sample3-3",
    delete2: "sample3-4",
  },
];
const restObjects = sampleObjects.map(({ delete1, delete2, ...restObject }) => {
  return restObject;
});
console.log(restObjects);
