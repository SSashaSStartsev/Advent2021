const partA = async (input: string[]) => {

  var parsedLines = input.map(line => line.replace("\r", "").split(""))

  var illegals: string[] = []

  parsedLines.forEach(line => {
    var stack: string[] = []
    for (let index = 0; index < line.length; index++) {
      const element = line[index];
      if (isClosing(element)) {
        var last = stack.pop()
        if (!areMatching(last, element)) {
          illegals.push(element)
          index = 9999999
        }
      }
      else {
        stack.push(element)
      }
    }
  })
  return calcScore(illegals)
}

const isClosing = (n:string): boolean => {
  switch (n){
    case "}": return true
    case "]": return true
    case ")": return true
    case ">": return true
    default: return false
  } 
}

const areMatching = (open: string|undefined, close: string) => {
  switch (close) {
    case "}": return open == "{"
    case "]": return open == "["
    case ")": return open == "("
    case ">": return open == "<"
    default: return false
  }
}

const findMatch = (open: string) => {
  switch (open) {
    case "{": return "}"
    case "[": return "]"
    case "(": return ")"
    case "<": return ">"
    default: return ""
  }
}

const calcScore = (list: string[]) => {
  var score = 0
  list.forEach(n => {
    switch (n){
      case "}": score += 1197; break;
      case "]": score += 57; break;
      case ")": score += 3; break;
      case ">": score += 25137; break;
      default: break;
    }   
  })
  return score
}

const getScore = (fix: string[]): number => {
  var score = 0

  fix.forEach(n => {
    score *= 5
    switch (n) {
      case ")": score += 1; break;
      case "]": score += 2; break;
      case "}": score += 3; break;
      case ">":score+= 4; break;
    }
  })
  return score
}

const partB = async (input: string[]) => {
  
  var parsedLines = input.map(line => line.replace("\r", "").split(""))

  var fixes: string[][] = []
  var stacks: string[][] = []

  for (let outerIndex = 0; outerIndex < parsedLines.length; outerIndex++) {
    const line = parsedLines[outerIndex];
    stacks.push([])
    for (let index = 0; index < line.length; index++) {
      const element = line[index];
      if (isClosing(element)) {
        var last = stacks[outerIndex].pop()
        if (!areMatching(last, element)) {
          stacks[outerIndex] = []
          index = 9999999
        }
      }
      else {
        stacks[outerIndex].push(element)
      }
    }
  }

  stacks.forEach(stack => {
    var tempList: string[] = []
    if (stack.length > 0) {
      stack.forEach(n => {
        tempList.push(findMatch(n))
      })
      fixes.push(tempList)
    }
  })

  var scores: number[] = []
  fixes.forEach((fix) => {
    scores.push(getScore(fix.reverse()))
  })
  
  return scores.sort((x, y) => x-y)[Math.round((scores.length-1)/2)]
}

export default {
  partA,
  partB,
}