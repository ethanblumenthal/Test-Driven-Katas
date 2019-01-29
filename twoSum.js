const twoSum = (arr, target) => {
  if (arr.length < 2) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; i++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

module.exports = twoSum;
