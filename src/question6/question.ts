const partA = async (input: string[]) => {
  var fishes = input[0].replace("\r", "").split(",").map((x)=> parseInt(x))

  var dayMap: { [key: number]:number} = {
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0
  }

  fishes.forEach((fish) => dayMap[fish]++)

  for (let day = 0; day < 80; day++) {
    var newMap: { [key: number]:number} = {
      0:0,
      1:0,
      2:0,
      3:0,
      4:0,
      5:0,
      6:0,
      7:0,
      8:0
    }
    for (const key in dayMap) {
      if (Object.prototype.hasOwnProperty.call(dayMap, key)) {
        const element = dayMap[key].valueOf();
        if(key == '0' && dayMap[0]!=0) {
          newMap[8] += element
          newMap[6] += element
        }
        else if(dayMap[key] != 0) {
          newMap[parseInt(key) - 1] += element
        }
      }
    }
    dayMap = newMap
  }

  return Object.values(dayMap).reduce((x,y) => x+y)
}

const partB = async (input: string[]) => {
  var fishes = input[0].replace("\r", "").split(",").map((x)=> parseInt(x))

  var dayMap: { [key: number]:number} = {
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0
  }

  fishes.forEach((fish) => dayMap[fish]++)

  for (let day = 0; day < 256; day++) {
    var newMap: { [key: number]:number} = {
      0:0,
      1:0,
      2:0,
      3:0,
      4:0,
      5:0,
      6:0,
      7:0,
      8:0
    }
    for (const key in dayMap) {
      if (Object.prototype.hasOwnProperty.call(dayMap, key)) {
        const element = dayMap[key].valueOf();
        if(key == '0' && dayMap[0]!=0) {
          newMap[8] += element
          newMap[6] += element
        }
        else if(dayMap[key] != 0) {
          newMap[parseInt(key) - 1] += element
        }
      }
    }
    dayMap = newMap
  }

  return Object.values(dayMap).reduce((x,y) => x+y)
}

export default {
  partA,
  partB,
}