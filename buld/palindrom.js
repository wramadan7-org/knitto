"use strict";
/**
 *
 * @param namePalindromParam string
 */
const palindromWithBuildFunction = (namePalindromParam) => {
    let namePalindrom = namePalindromParam.toLowerCase().split('').reverse().join('');
    if (namePalindromParam.toLowerCase() === namePalindrom) {
        console.log(`${namePalindromParam.toLowerCase()} is Palindrom`);
    }
    else {
        console.log(`${namePalindromParam.toLowerCase()} is not Palindrom`);
    }
};
palindromWithBuildFunction('salas');
