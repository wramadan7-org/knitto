/**
 * Create function to console FizzBuzz
 * @param fromNumber number
 * @param toNumber number
 */
const fizzbuzz = (fromNumber: number, toNumber: number) => {
  for (let i = fromNumber; i < toNumber; i++) {
    // KPK of 3 and 5 is 15
    if (i % 15 === 0) {
      console.log(`Number of ${i} is FizzBuzz`)
    } else if (i % 5 === 0) {
      console.log(`Number of ${i} is Buzz`)
    } else if (i % 3 === 0) {
      console.log(`Number of ${i} is Fizz`)
    } else {
      console.log(`Number of ${i} is ${i}`)
    }
  }
}

fizzbuzz(1, 100)