const partA = async (input: string[][]) => {
  var totalRisk = 0
  var parsedInput:number[][][] = input.map((line) => line.map(x => x.replace("\r", "").trim().split("").map(y => parseInt(y))))

  parsedInput.forEach((line, indexLine) => {
    line.forEach((x, index) => {
      if(x != undefined && x.length > 0) {
        var element = x[0]
        if(isLowest(element, parsedInput, indexLine, index)) {
          totalRisk += element + 1
        }
      }
    })
  })
  
  return totalRisk
}

const isLowest = (element: number, grid: number[][][], i:number, j:number) => {
  var left = 999999 
  var right = 999999 
  var top = 999999 
  var bottom = 999999 
  if(i != 0) {
    top = grid[i-1][j][0]
  }
  if (j != 0){
    left = grid[i][j-1][0]
  }
  if (j <(grid[0].length-1)){
    right = grid[i][j+1][0]
  }
  if (i <(grid.length-1)) {
    bottom = grid[i+1][j][0]
  }
  var isTrue = element < left && element < right && element < top && element < bottom

  return isTrue
}

const is9OnTop = (grid: number[][][], i:number, j:number): boolean => {
  return grid[i-1][j][0] == 9
}

const is9OnBottom = (grid: number[][][], i:number, j:number): boolean => {
  return grid[i+1][j][0] == 9
}

const is9OnLeft = (grid: number[][][], i:number, j:number): boolean => {
  return grid[i][j-1][0] == 9
}

const is9OnRight = (grid: number[][][], i:number, j:number): boolean => {
  return grid[i][j+1][0] == 9
}

const isSurrounded = (grid: number[][][], i:number, j:number): boolean => {
  return is9OnTop(grid, i, j) && is9OnBottom(grid, i, j) && is9OnLeft(grid, i, j) && is9OnRight(grid, i, j)
}

const getShape = (grid: number[][][], i:number, j:number, shapeSoFar: number[]): number[] => {
  grid[i][j][0] = 9
  if (isSurrounded(grid, i, j)) {
    shapeSoFar.push( grid[i][j][0])
    return shapeSoFar
  }
  else {
    var shape = shapeSoFar
    shape.push(grid[i][j][0])
    if (!is9OnRight(grid, i, j)) {
      shape.concat(getShape(grid, i, j + 1, shape))
    } 
    if (!is9OnLeft(grid, i, j)) {
      shape.concat(getShape(grid, i, j - 1, shape))
    }
    if (!is9OnTop(grid, i, j)) {
      shape.concat(getShape(grid, i-1, j, shape))
    }
    if (!is9OnBottom(grid, i, j)) {
      shape.concat(getShape(grid, i+1, j, shape))
    }
    return shape
  }
}

const partB = async (input: string[][]) => {
  var shapes: number[] = []
  var parsedInput:number[][][] = input.map((line) => line.map(x => x.replace("\r", "").trim().split("").map(y => parseInt(y))))

  for (let indexLine = 1; indexLine < parsedInput.length; indexLine++) {
    const line = parsedInput[indexLine];
    for (let index = 1; index < line.length; index++) {
      if(line[index] != undefined && line[index].length > 0) {
        if (line[index] != undefined && line[index].length > 0 && line[index][0] != 9) {
          var shape = getShape(parsedInput, indexLine, index, [])
          shapes.push(shape.length)
        }
      }
    }
  }
  
  return shapes.sort((x,y) => x-y).reverse().slice(0,3).reduce((x,y) => x*y)
}

export default {
  partA,
  partB,
}