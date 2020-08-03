export const findMissingNumber = (arr: number[]): number => {
    const expectedSum = 15;
    let sum = 0;
    for (const num of arr) {
      sum += num;
    }
    return expectedSum - sum;
  };

  console.log(findMissingNumber([1,3,4,5]))
  