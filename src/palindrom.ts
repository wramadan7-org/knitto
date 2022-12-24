/**
 * 
 * @param namePalindromParam string
 */
const palindromWithBuildFunction = (namePalindromParam: string) => {
  let lowerCaseParam: string = namePalindromParam.toLowerCase()
  let namePalindrom: string = lowerCaseParam.split('').reverse().join('')

  if (lowerCaseParam !== namePalindrom) {
    return `${lowerCaseParam} is not Palindrom`
  }

  return `${lowerCaseParam} is Palindrom`
}

/**
 * 
 * @param namePalindromParam string
 * @returns 
 */
const palindromWihtoutBuildFunction = (namePalindromParam: string) => {
  let lowerCaseParam: string = namePalindromParam.toLowerCase()

  let resultReverse: string = ''

  for (let i: number = namePalindromParam.length - 1; i >= 0; i--) {
    resultReverse += namePalindromParam[i]
  }

  if (lowerCaseParam !== resultReverse) {
    return `${lowerCaseParam} is not Palindrom`
  }

  return `${lowerCaseParam} is Palindrom`
}

console.log(`Palindrom with build function: ${palindromWithBuildFunction('saa')}`)
console.log(`Palindrom without build function: ${palindromWihtoutBuildFunction('scs')}`)