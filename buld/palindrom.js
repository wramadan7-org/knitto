"use strict";
/**
 *
 * @param namePalindromParam string
 */
const palindromWithBuildFunction = (namePalindromParam) => {
    let lowerCaseParam = namePalindromParam.toLowerCase();
    let namePalindrom = lowerCaseParam.split('').reverse().join('');
    if (lowerCaseParam !== namePalindrom) {
        return `${lowerCaseParam} is not Palindrom`;
    }
    return `${lowerCaseParam} is Palindrom`;
};
/**
 *
 * @param namePalindromParam string
 * @returns
 */
const palindromWihtoutBuildFunction = (namePalindromParam) => {
    let lowerCaseParam = namePalindromParam.toLowerCase();
    let resultReverse = '';
    for (let i = namePalindromParam.length - 1; i >= 0; i--) {
        resultReverse += namePalindromParam[i];
    }
    if (lowerCaseParam !== resultReverse) {
        return `${lowerCaseParam} is not Palindrom`;
    }
    return `${lowerCaseParam} is Palindrom`;
};
console.log(`Palindrom with build function: ${palindromWithBuildFunction('saa')}`);
console.log(`Palindrom without build function: ${palindromWihtoutBuildFunction('scs')}`);
