import path from "path"

const partA = async (input: string[]) => {
  var inputMap:{[key:string]:string[]} = {}
  var parsedInput = input.map(line => line.replace("\r", "").split("-")).forEach(x =>{
    if(inputMap[x[0]] == undefined) {
      inputMap[x[0]] = [x[1]]
    } else {
      inputMap[x[0]].push(x[1])
    }
    if(inputMap[x[1]] == undefined) {
      inputMap[x[1]] = [x[0]]
    } else {
      inputMap[x[1]].push(x[0])
    }
  })
  var paths = getPaths(inputMap,[], []).filter(x => x[0] == "start")
  return paths.length
}

const getPaths = (inputMap:{[key:string]:string[]}, curr: string[], soFar: string[][]): string[][] => {
  if(soFar.length == 0) {
    if (inputMap["start"]!= undefined) {
      inputMap["start"].forEach((x) => {
        soFar.push(["start", x])
        soFar = getPaths(inputMap, ["start", x], soFar)
      })
    }
  }
  else {
    
  }
  return soFar
}

const partB = async (input: string[]) => {
  return null
}

export default {
  partA,
  partB,
}