const partA = async (input: string[]) => {
  var outputs = input.map((line) => line.replace("\r", "").split("|")[1].split(" ").slice(1))
  var counts = 0

  outputs.forEach((line) =>counts += line.filter((x) => (x.length == 2||x.length == 3||x.length == 4||x.length == 7)).length)
  return counts
}
 interface line {
    input: string[] 
    output:string[]
}
   
const partB = async (input: string[]) => {
  var runningCount = 0
  var lines: line[] = input.map((line) => ({
    input: line.replace("\r", "").split("|")[0].split(" ").sort((x, y) => x.length- y.length).slice(1),
    output: line.replace("\r", "").split("|")[1].split(" ").slice(1)
  }))

  var logicMapping = resetMap
  
  lines.forEach((line) => {
    var sortedIn = line.input
    var soFar = [""]
    var one = sortedIn[0].split("")
    one.forEach((x) => soFar.push(x))
    logicMapping[2] = [sortedIn[0].charAt(0), sortedIn[0].charAt(1)]
    logicMapping[5] = [sortedIn[0].charAt(0), sortedIn[0].charAt(1)]

    var seven = sortedIn[1].split("")
    seven.forEach((x) => soFar.push(x))

    logicMapping[0] = sortedIn[1].split("").filter((x) => !one.includes(x))[0]

    var four = sortedIn[2].split("")
    four.forEach((x) => soFar.push(x))
    var deltaFourOne = four.filter((x) => !one.includes(x))
    logicMapping[1] = [deltaFourOne[0], deltaFourOne[1]]
    logicMapping[3] = [deltaFourOne[0], deltaFourOne[1]]

    var potentialTwo = sortedIn[3].split("")
    var potentialFive = sortedIn[4].split("")
    var potentialThree = sortedIn[5].split("")

    var notCommon = potentialTwo
      .filter(x => !potentialFive.includes(x) && !potentialThree.includes(x))
      .concat(potentialFive.filter(x => !potentialTwo.includes(x) && !potentialThree.includes(x)))
      .concat(potentialThree.filter((x => !potentialTwo.includes(x) && !potentialFive.includes(x))))

    logicMapping[6] = potentialTwo.filter((x) => potentialFive.includes(x) && potentialThree.includes(x) && !soFar.includes(x))[0]
    logicMapping[4] = notCommon.filter((x) => !soFar.includes(x))[0]
    logicMapping[1] = notCommon.filter(x => logicMapping[4] != x)
    logicMapping[3] = logicMapping[3].filter(x => !logicMapping[1].includes(x))
    var actualTwo: string[] = []
    if (potentialTwo.includes(logicMapping[4]) || potentialTwo.includes(logicMapping[4])) {
      actualTwo = potentialTwo
    }
    else if ((potentialFive.includes(logicMapping[4]) || potentialFive.includes(logicMapping[4]))) {
      actualTwo = potentialFive
    }
    else {
      actualTwo = potentialThree
    }
    logicMapping[2] = logicMapping[2].filter(x => actualTwo.includes(x))
    logicMapping[5] = logicMapping[5].filter(x => !logicMapping[2].includes(x))

    var outputParsed = line.output.map((x)=> {
      if(x.length == 2) return 1
      if (x.length == 3) return 7
      if (x.length == 4) return 4
      if (x.length == 7) return 8
      if (x.includes(logicMapping[0])
        && x.includes(logicMapping[1][0])
        && x.includes(logicMapping[4]) 
        && x.includes(logicMapping[6]) 
        && x.includes(logicMapping[5][0])
        && x.includes(logicMapping[2][0])) return 0
      if (x.includes(logicMapping[0])
        && x.includes(logicMapping[1][0])
        && x.includes(logicMapping[4]) 
        && x.includes(logicMapping[6]) 
        && x.includes(logicMapping[5][0])
        && x.includes(logicMapping[3][0])) return 6
      if (x.includes(logicMapping[0])
        && x.includes(logicMapping[1][0])
        && x.includes(logicMapping[2][0]) 
        && x.includes(logicMapping[6]) 
        && x.includes(logicMapping[5][0])
        && x.includes(logicMapping[3][0])) return 9
      if (x.includes(logicMapping[0])
        && x.includes(logicMapping[1][0])
        && x.includes(logicMapping[6]) 
        && x.includes(logicMapping[5][0])
        && x.includes(logicMapping[3][0])) return 5
      if (x.includes(logicMapping[0])
        && x.includes(logicMapping[2][0])
        && x.includes(logicMapping[6]) 
        && x.includes(logicMapping[4])
        && x.includes(logicMapping[3][0])) return 2
      if (x.includes(logicMapping[0])
        && x.includes(logicMapping[2][0])
        && x.includes(logicMapping[6]) 
        && x.includes(logicMapping[5][0])
        && x.includes(logicMapping[3][0])) return 3
    })
    var out = parseInt(outputParsed.join().replace(",","").replace(",","").replace(",",""))
    runningCount += out
  })
  return runningCount
}

const resetMap = {
  0:"",
  1:[""],
  2:[""],
  3:[""],
  4:"",
  5:[""],
  6:""
}

export default {
  partA,
  partB,
}