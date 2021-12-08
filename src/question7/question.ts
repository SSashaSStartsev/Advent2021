const partA = async (input: string[]) => {
  var crabs = input[0].replace("\r", "").split(",").map((x) => parseInt(x)).sort((x,y) => x-y)

  var pastFuel:number[] = Array.from({length: crabs[crabs.length-1]}, (_) => 0)

  pastFuel = pastFuel.map((x,index)=> {
    var runningSum = 0
    crabs.forEach((crab) => runningSum +=(Math.abs(index - crab)))
    return runningSum
  })

  return pastFuel.sort((x,y) => x-y)[0]
}

const partB = async (input: string[]) => {
  var crabs = input[0].replace("\r", "").split(",").map((x) => parseInt(x)).sort((x,y) => x-y)

  var pastFuel:number[] = Array.from({length: crabs[crabs.length-1]}, (_) => 0)

  pastFuel = pastFuel.map((x,index)=> {
    var runningSum = 0
    
    crabs.forEach((crab)=>{
      var n = (Math.abs(index - crab))
      runningSum += n*(n+1)/2
    })
    return runningSum
  })

  return pastFuel.sort((x,y) => x-y)[0]
}

export default {
  partA,
  partB,
}