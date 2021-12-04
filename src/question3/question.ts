import { count } from "console";

const partA = async (input: string[][]) => {
  let gamma = ""
  let epsilon = ""

  var grid = input[0].map((_, colIndex) => input.map(row => row[colIndex]));

  for (let index = 0; index < grid.length; index++) {
    const element = grid[index];
    let countOne = 0
    element.forEach((x) => (x === "1" && countOne++))
    if (countOne > element.length/2){ 
      gamma += "1"
      epsilon += "0"
    }
    else {
       gamma +="0"
       epsilon += "1"
      }
  }

  console.log(grid)
 // return gamma
 return parseInt(epsilon, 2) * parseInt(gamma,2)
}

const partB = async (input: string[][], strings: string[]) => {
  var oxygen = ""
  var scrubber = ""
  var grid = input[0].map((_, colIndex) => input.map(row => row[colIndex]));

  var possibilities = strings    
  var index = 0
  while(possibilities.length != 1 && index <= input.length) {
    let countOne = 0
    let element = possibilities.map((x) => (x.charAt(index)))
    element.forEach((x) => (x === "1" && countOne++))
    if (countOne >= element.length/2) { 
      possibilities = possibilities.filter((x) => {if(x.charAt(index) === "1") return true})
    }
    else {
      possibilities = possibilities.filter((x) => {if(x.charAt(index) === "0") return x})
    }
    index++
  }

  oxygen = possibilities.toString().replace(",", "").replace("\r", "")

  possibilities = strings
  index = 0
  while(possibilities.length != 1 && index <= input.length) {
    let countZero = 0
    let element = possibilities.map((x) => (x.charAt(index)))
    element.forEach((x) => (x === "0" && countZero++))
    if (countZero <= element.length/2) { 
      possibilities = possibilities.filter((x) => {if(x.charAt(index) === "0") return true})
    }
    else {
      possibilities = possibilities.filter((x) => {if(x.charAt(index) === "1") return x})
    }
    index++
  }

  scrubber = possibilities.toString().replace(",", "").replace("\r", "")

  return parseInt(oxygen, 2) * parseInt(scrubber , 2)
}

export default {
  partA,
  partB,
}