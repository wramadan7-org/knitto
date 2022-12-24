/**
 * 
 * @param namePalindromParam string
 */
const palindromWithBuildFunction = (namePalindromParam: string) => {
  let namePalindrom: string = namePalindromParam.toLowerCase().split('').reverse().join('')

  if (namePalindromParam.toLowerCase() === namePalindrom) {
    console.log(`${namePalindromParam.toLowerCase()} is Palindrom`)
  } else {
    console.log(`${namePalindromParam.toLowerCase()} is not Palindrom`)
  }
}

palindromWithBuildFunction('salas')