function roman (romannumeral) {
  var numberLookup = {
    I: 1,
    V: 5,
    X: 10,
    C: 100,
    D: 500,
    M: 1000
  }

  var arabic = 0

  var romannumeralarray = romannumeral.split('')

  // var previousnumeral = 'x'
  //   for (var i = romannumeralarray.length; i > 0; --i) {
  //   var thenumeral = romannumeralarray[i - 1]
  //   if (numberLookup[previousnumeral] > numberLookup[thenumeral]) {
  //     accumulator -= numberLookup[thenumeral]
  //   } else {
  //     accumulator += numberLookup[thenumeral]
  //   }
  //   previousnumeral = thenumeral
  // }

  // array map solution loop from back to front. change the array 
  // value to the number, if a decrementer change abs value of number. When done, sum the array

  arabic = romannumeralarray.reduceRight(function (accumulator, currentromandigit, index, array) {
    var currentValue = numberLookup[currentromandigit]
    var previousValue = accumulator > 0 ? numberLookup[array[index + 1]] : 0
    accumulator += (numberLookup[currentromandigit] >= previousValue) ? currentValue : -currentValue
    // accumulator += (numberLookup[currentromandigit] >= accumulator) ? currentValue : -currentValue
    // console.log(accumulator, currentValue)
    return accumulator
  }, 0
  )
  // console.log(accumulator)
  return arabic
}

// MMXVIII

// console.log(roman('IV'))

module.exports = roman
