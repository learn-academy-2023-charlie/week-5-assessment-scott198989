// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

//Psuedocode
//Input: Take in a string
//Output: Return a string with a coded messege.
//Process:  Create a function that takes in a given string and removes the selcted vowels.  Declare a object in the function that assign key (the vowels) value(numbers replacing the vowels). The string is split into a array of individual charecters using .split.  Use the .map to iterate over the array and checks to see if any of the letters matches the key in charMap, and if it does, replace it with the value from charMap. Finally, use .join to join the letters back into a string.  


// a) Create a test with expect statements using the variables provided.

// FAIL  ./code-challenges.test.js
// words
//   ✕ takes in a string and returns a string with a coded message, The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0 (1 ms)

// ● words › takes in a string and returns a string with a coded message, The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0

//   ReferenceError: words is not defined



const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


describe('words', () => {
    it('takes in a string and returns a string with a coded message, The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0', () => {
      expect(words('Lackadaisical')).toEqual('L4ck4d41s1c4l')
      expect(words('Gobbledygook')).toEqual('G0bbl3dyg00k')
      expect(words('Eccentric')).toEqual('3cc3ntr1c')
    })
  })

const words = (string) => {
    const charMap = {
      'a': '4',
      'e': '3',
      'i': '1',
      'o': '0'
    }
  
    let words = string.split('').map((char) => {
      return charMap[char.toLowerCase()] || char
    }).join('')
  
    return words
  }
    const words2 = (string) => {
        const charMap2 = {
          'a': '4',
          'e': '3',
          'i': '1',
          'o': '0'
        }
      
        let words2 = string.split('').map((char) => {
          return charMap2[char.toLowerCase()] || char
        }).join('')
      
        return words2
      }

        const words3 = (string) => {
            const charMap3 = {
              'a': '4',
              'e': '3',
              'i': '1',
              'o': '0'
            }
          
            let words3 = string.split('').map((char) => {
              return charMap3[char.toLowerCase()] || char
            }).join('')
          
            return words3
          }
          
// b) Create the function that makes the test pass.

// PASS  ./code-challenges.test.js
// words
//   ✓ takes in a string and returns a string with a coded message, The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0 (1 ms)




// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

//Psuedocode:
//Input: take in a array of words
//Input: Return a array of all the words containing that particular letter.
//Process: Create a function that uses array and letter as parameters. Use .filter to go through each word in the array and checks to see if its lowercase or not (it will lowercase if its not by using this method), if the letter is present in that word it is kept in the filtered array.

// a) Create a test with expects statement using the variable provided.

// FAIL  ./code-challenges.test.js
// words
//   ✓ takes in a string and returns a string with a coded message, The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0 (1 ms)
// findLetter
//   ✕ returns an array of words containing the specified letter (case-insensitive)

// ● findLetter › returns an array of words containing the specified letter (case-insensitive)

//   ReferenceError: findLetter is not defined

//     125 | describe('findLetter', () => {
//     126 |   it('returns an array of words containing the specified letter (case-insensitive)', () => {
//   > 127 |     expect(findLetter(fruitArray, "a")).toEqual(["Mango", "Apricot", "Peach"])
//         |     ^
//     128 |     expect(findLetter(fruitArray, "a").length).toEqual(3)
//     129 |     expect(findLetter(fruitArray, "a")).toContain("Apricot")
//     130 |   })

//     at Object.expect (code-challenges.test.js:127:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total

//   ReferenceError: findLetter is not defined

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe('findLetter', () => {
  it('returns an array of words containing the specified letter (case-insensitive)', () => {
    expect(findLetter(fruitArray, "a")).toEqual(["Mango", "Apricot", "Peach"])
    expect(findLetter(fruitArray, "a").length).toEqual(3)
    expect(findLetter(fruitArray, "a")).toContain("Apricot")
  })
})


const findLetter = (array, letter) => {
    return array.filter(word => word.toLowerCase().includes(letter.toLowerCase()))
  }
  
  const findLetter2 = (array2, letter) => {
    return array2.filter(word => word.toLowerCase().includes(letter.toLowerCase()))
  }
// b) Create the function that makes the test pass.

// PASS  ./code-challenges.test.js
// words
//   ✓ takes in a string and returns a string with a coded message, The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0 (1 ms)
// findLetter
//   ✓ returns an array of words containing the specified letter (case-insensitive)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total






// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

//Psuedocode:  I had to get help with this one, I can understand why I would use a for loop to iterste over the array of numbers but the rest of the code I am not sure how GPT came up with. I also had to get GPT to help with the test. My blocker is:  
        // const num = hand[i];
    //   counts[num] = (counts[num] || 0) + 1
    // }
  
    // const values = Object.values(counts);
    // return values.includes(2) && values.includes(3)

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// a) Create a test with expect statements using the variable provided.

// FAIL  ./code-challenges.test.js
// words
//   ✓ takes in a string and returns a string with a coded message, The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0 (1 ms)
// findLetter
//   ✓ returns an array of words containing the specified letter (case-insensitive) (1 ms)
// isFullHouse
//   ✕ returns true if the array is a full house
//   ✕ returns false if the array is not a full house
//   ✕ returns false if the array has four of a kind

// ● isFullHouse › returns true if the array is a full house

//   ReferenceError: isFullHouse is not defined

//     187 | describe('isFullHouse', () => {
//     188 |     it('returns true if the array is a full house', () => {
//   > 189 |       expect(isFullHouse([5, 5, 5, 3, 3])).toBe(true);
//         |       ^
//     190 |     })
//     191 |   
//     192 |     it('returns false if the array is not a full house', () => {

//     at Object.expect (code-challenges.test.js:189:7)

// ● isFullHouse › returns false if the array is not a full house

//   ReferenceError: isFullHouse is not defined

//     191 |   
//     192 |     it('returns false if the array is not a full house', () => {
//   > 193 |       expect(isFullHouse([5, 5, 3, 3, 4])).toBe(false);
//         |       ^
//     194 |     })
//     195 |   
//     196 |     it('returns false if the array has four of a kind', () => {

//     at Object.expect (code-challenges.test.js:193:7)

// ● isFullHouse › returns false if the array has four of a kind

//   ReferenceError: isFullHouse is not defined

//     195 |   
//     196 |     it('returns false if the array has four of a kind', () => {
//   > 197 |       expect(isFullHouse([5, 5, 5, 5, 4])).toBe(false);
//         |       ^
//     198 |     })
//     199 |   })
//     200 |

//     at Object.expect (code-challenges.test.js:197:7)

// Test Suites: 1 failed, 1 total
// Tests:       3 failed, 2 passed, 5 total

describe('isFullHouse', () => {
  it('returns true if the array is a full house', () => {
    expect(isFullHouse([5, 5, 5, 3, 3])).toBeTruthy()
    expect(isFullHouse([7, 2, 7, 2, 7])).toBeTruthy()
  })

  it('returns false if the array is not a full house', () => {
    expect(isFullHouse([5, 5, 3, 3, 4])).toBeFalsy()
  })
})


  const isFullHouse = (hand) => {
    const counts = {};
    for (let i = 0; i < hand.length; i++) {
      const num = hand[i];
      counts[num] = (counts[num] || 0) + 1
    }
  
    const values = Object.values(counts);
    return values.includes(2) && values.includes(3)
  }
  

// b) Create the function that makes the test pass.

// PASS  ./code-challenges.test.js
// words
//   ✓ takes in a string and returns a string with a coded message, The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0 (1 ms)
// findLetter
//   ✓ returns an array of words containing the specified letter (case-insensitive)
// isFullHouse
//   ✓ returns true if the array is a full house
//   ✓ returns false if the array is not a full house
//   ✓ returns false if the array has four of a kind

// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total