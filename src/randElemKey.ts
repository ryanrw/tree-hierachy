function randomBetween(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomElementKey(index: number, range = 32): string | undefined {
  try {
    const loopRound = range - 3
    const strArr = []
    for (let i = 0; i < loopRound; i++) {
      const stringRandomCase = randomBetween(1, 3)
      if (stringRandomCase === 1) {
        const charNumber = randomBetween(48, 57)
        const char = String.fromCharCode(charNumber)
        strArr.push(char)
      } else if (stringRandomCase === 2) {
        const charUpperCase = randomBetween(65, 90)
        const char = String.fromCharCode(charUpperCase)
        strArr.push(char)
      } else if (stringRandomCase === 3) {
        const charLowerCase = randomBetween(97, 122)
        const char = String.fromCharCode(charLowerCase)
        strArr.push(char)
      }
    }
    const randomString = strArr.join('')
    return `${index.toString().padStart(2, '0')}_${randomString}`
  } catch (e) {
    console.error(e)
  }
}

export default randomElementKey
