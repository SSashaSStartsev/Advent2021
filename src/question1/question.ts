const partA = async (input: number[], sumGoal: number = 2020) => {
  let increaseCount = 0
  for (let index = 1; index < input.length; index++) {
    const element = input[index];
    if(element > input[index-1]) increaseCount++
  }
  console.log(increaseCount);
  
  return increaseCount
}

const partB = async (input: number[]) => {
  let increaseCount = 0
  let prevSum = 100000000000000000000000000000
  for (let index = 2; index < input.length; index+=1) {
    const windowSum = input[index] + input[index-1] + input[index-2]
    if(windowSum > prevSum) increaseCount ++
    prevSum = windowSum
  }
  return increaseCount
}

export default {
  partA,
  partB,
}