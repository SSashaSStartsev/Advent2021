const partA = async (input: string[], len: number) => {
  var grid : number [][] = Array.from({ length: len+1 }, () => Array.from({ length: len+1 }, () => 0));

  var lines = input.map((x) => x.replace("\r", "").split(" -> ").map((x) => x.split(",").map((x) => parseInt(x))))

  lines.forEach ((line) => {
    if(isX(line)) fillX(grid, line)
    if(isY(line)) fillY(grid, line)
  })

  return grid.map((line) => (line.filter((x) => (x >= 2))).length).reduce((x,y)=> x+y)
}

const fillX = (grid: number[][], line: number[][]) => {
  for (let index = line[0][1]; index <= line[1][1]; index++) {
    grid[index][line[0][0]]++
  }
}

const fillY = (grid: number[][], line: number[][]) => {
  for (let index = line[0][0]; index <= line[1][0]; index++) {
    grid[line[0][1]][index]++
  }
}


const fillDiagonal = (grid: number[][], line: number[][]) => {
  var slope = (line[1][1] - line[0][1])/(line[1][0] - line[0][0])
  
  if (slope > 0) {
    var len = line[1][0]-line[0][0]
    for (let index = 0; index <= len; index++) {
      grid[line[0][1] + index][line[0][0] + index]++
    }
  }

  if (slope < 0) {
    var len = line[0][0]-line[1][0]
    for (let index = 0; index <= len; index++) {
      grid[line[0][1] + index][line[0][0] - index]++
    }
  }
}


const isX = (line: number[][]) => {
  if(line[0][0] == line[1][0]){
    if(line[0][1] > line[1][1]){
      var first = line[1]
      line[1] = line[0]
      line[0] = first
    }
    return true
  }
  return false
}

const isY = (line: number[][]) => {
  if(line[0][1] == line[1][1]){
    if(line[0][0] > line[1][0]){
      var first = line[1]
      line[1] = line[0]
      line[0] = first
    }
    return true
  }
  return false
}


const isDiagonal = (line: number[][]) => {
  var slope = (line[1][1] - line[0][1])/(line[1][0] - line[0][0])
  if(slope > 0 && line[0][0] > line[1][0]){
    var first = line[1]
    line[1] = line[0]
    line[0] = first
  }

  if(slope < 0 && line[0][1] > line[1][1]){
    var first = line[1]
    line[1] = line[0]
    line[0] = first
  }
  return true
}


const partB = async (input: string[], len:number) => {
  var grid : number [][] = Array.from({ length: len+1 }, () => Array.from({ length: len+1 }, () => 0));

  var lines = input.map((x) => x.replace("\r", "").split(" -> ").map((x) => x.split(",").map((x) => parseInt(x))))

  lines.forEach ((line) => {
    if(isX(line)) fillX(grid, line)
    else if(isY(line)) fillY(grid, line)
    else if(isDiagonal(line)) fillDiagonal(grid, line)
  })

  return grid.map((line) => (line.filter((x) => (x >= 2))).length).reduce((x,y)=> x+y)
}

export default {
  partA,
  partB,
}