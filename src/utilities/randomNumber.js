// import React from 'react'

const randomNumber = (digits) => {
  // logic to generate a random number, with alternating number and alhpabets, with a max length of 10 characters.

  const randomCalculator = (input) => {
    if (input <= 0 || input >= 11) {
      return -1
    } else {
      var randomString = ''
      while (input > 0) {
        // valid case now
        //  my logic: doesn't work: reason: alphabet indices start from 15.
        // const numberIndex = Math.ceil(Math.random() * 10);
        // const alphabetIndex = Math.ceil(Math.random() * 10) + 15;
        if (input % 2 == 0) {
          const numberIndex = Math.floor(Math.random() * 9)
          randomString += numbers[numberIndex]
          console.log('current number index:', numberIndex)
          console.log(
            'corresponding random string character:',
            numbers[numberIndex]
          )
        } else {
          const alphabetIndex = Math.floor(Math.random() * 25)
          randomString += alphabets[alphabetIndex]
          console.log('current alphabet index:', alphabetIndex)
          console.log('current number index:', alphabets[alphabetIndex])
        }

        //   console.log(numberIndex);
        //   console.log(alphabetIndex);
        input--
      }
    }

    return randomString
  }
  // getting input from the user
  var alphabets = 'abcdefghijklmnopqrstuvwxyz'
  var numbers = '123456789'
  // const input = 9

  return randomCalculator(digits)
}

export default randomNumber
