const partA = async (input: string[]) => {
  var unmarked = 0
  var winning = 0
  var calls = input[0].replace("\r", "").split(",")

  var temp = input.splice(2)
  var boards:string[][] = []
  var currentBoard:string[] = []
  for (let index = 0; index < temp.length; index++) {
    const element = temp[index];
    if (element === "\r" || element === "" || index == temp.length-1) {
      boards.push(currentBoard)
      currentBoard = []
    }
    else {
      currentBoard.push(element)
    }
  }

  var parsed = boards.map((board) => {
    return board.map((element) => {
      return element.replace("\r", "").split(" ").filter((x) => (x !== "")).map((x) => (parseInt(x)))
    })
  })

  var bingoBoard = findBingo(parsed)
  var index = 0
  while (bingoBoard === undefined) {
    var call = parseInt(calls[index])
    parsed = replaceWithNegative(parsed, call)
    bingoBoard = findBingo(parsed)
    index++
  }

  return bingoBoard
}

const replaceWithNegative = (boards: number[][][], num: number) => {
  return boards.map(
    (board) => (board.map(
      (line) => (line.map(
        (x) => {
          if (x == num && x== 0) return -1
          if (x == num) return -1*x 
          else return x
        }
        ))
    ))
  )
}

const findBingo = (boards: number[][][]): number[][][] => {
  var which: number[][][] = []
  boards.forEach((board) => {
    if(findRow(board) || findLine(board)) which.push(board)
  })
  return which
}

const findLine = (board: number[][]) => {
  var anyLines = false
  board.forEach((line) => {
    if(line.every((x) => (x < 0))) anyLines = true; return;
  })
  return anyLines
}


const findRow = (board: number[][]) => {
  var anyLines = false
  board.map((_, colIndex) => board.map(row => row[colIndex])).forEach((line) => {
    if(line.every((x) => (x < 0))) anyLines = true; return;
  })
  return anyLines
}

const partB = async (input: string[]) => {
  var unmarked = 0
  var winning = 0
  var calls = input[0].replace("\r", "").split(",")

  var temp = input.splice(2)
  var boards:string[][] = []
  var currentBoard:string[] = []
  for (let index = 0; index < temp.length; index++) {
    const element = temp[index];
    if (element === "\r" || element === "" || index == temp.length-1) {
      boards.push(currentBoard)
      currentBoard = []
    }
    else {
      currentBoard.push(element)
    }
  }

  var parsed = boards.map((board) => {
    return board.map((element) => {
      return element.replace("\r", "").split(" ").filter((x) => (x !== "")).map((x) => (parseInt(x)))
    })
  })

  var bingoBoard = findBingo(parsed)
  var index = 0
  while (parsed.length != 0) {
    var call = parseInt(calls[index])
    parsed = replaceWithNegative(parsed, call)
    bingoBoard = findBingo(parsed)
    parsed = parsed.filter((board) => (!bingoBoard.includes(board)))
    index++
  }

  var boardSum = bingoBoard

  return parseInt(calls[index-1])
}

export default {
  partA,
  partB,
}