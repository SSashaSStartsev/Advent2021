const partA = async (input: string[]) => {
  let totalX = 0
  let totalY = 0

  input.forEach(element => {

    let init = element.split(" ")

    switch (init[0]) {
      case "forward": totalX += parseInt(init[1]) 
      break
      case "up": totalY -= parseInt(init[1])
      break
      case "down": totalY += parseInt(init[1])
      break
    }
  });

  return totalX * totalY
}

const partB = async (input: string[]) => {
  let totalX = 0
  let totalY = 0
  let aim = 0

  input.forEach(element => {

    let init = element.split(" ")

    switch (init[0]) {
      case "forward": totalX += parseInt(init[1]) 
      totalY += aim * parseInt(init[1])
      break
      case "up": aim -= parseInt(init[1])
      break
      case "down": aim += parseInt(init[1])
      break
    }
  });

  return totalX * totalY
}

export default {
  partA,
  partB,
}