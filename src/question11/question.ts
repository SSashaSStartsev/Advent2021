import { group } from "console"

const partA = async (input: string[][]) => {
  var grid = input.map(line => line.filter(x => x != "\r" && x != "").map(x => parseInt(x))).filter((x) => x.length > 0)
  var flashes = 0
  for (let step = 0; step < 100; step++) {
    flashes += getFlashes(grid)
  }
  
  return flashes
}

const getFlashes = (grid: number[][]): number => {
  var flashes: number[] = []
  for (let index = 0; index < grid.length; index++) {
    const line = grid[index];
    for (let indexLine = 0; indexLine < line.length; indexLine++) {
      if (line[indexLine] == 0) {
        if (! flashes.includes(index*10 + indexLine)) {
          grid[index][indexLine]++
        }
      }
      else if (line[indexLine] != 9 ) {
        grid[index][indexLine]++
      }
      else if(line[indexLine] == 9 && !flashes.includes(index * 10 + indexLine)) {
        grid[index][indexLine] = 0
        adjustAdjecent(grid, index, indexLine, flashes)
      }
    }
  }

  return flashes.length
}

const adjustAdjecent = (grid: number[][], i:number, j: number, flashes: number[]) => {
  if (i != 0) {
    update(grid, i-1, j, flashes)
  }
  if(j != 0){
    update(grid, i, j-1, flashes)
  }
  if(i != 0 && j != 0) {
    update(grid, i-1, j-1, flashes)
  }
  if(i != 0 && j < grid[0].length-1) {
    update(grid, i-1, j+1, flashes)
  }
  if(i < grid.length-1 && j != 0) {
    update(grid, i+1, j-1, flashes)
  }
  if(i < grid.length-1) {
    update(grid, i+1, j, flashes)
  }
  if(j < grid[0].length-1) {
    update(grid, i, j+1, flashes)
  }
  if(i < grid.length-1 && j < grid[0].length-1) {
    update(grid, i+1, j+1, flashes)
  } 
}

const update = (grid: number[][], i: number, j: number, flashes : number[]) => {
  if (grid[i][j] != 0 || (grid[i][j] == 0 && !flashes.includes(i*10 + j))) {
    grid[i][j]++
    if (grid[i][j] > 9 && !flashes.includes(i*10 + j)) {
      grid[i][j] = 0
      flashes.push(i*10 + j)
      adjustAdjecent(grid, i,j, flashes)
    }
  }
}

const partB = async (input: string[][]) => {
  return null
}

export default {
  partA,
  partB,
}