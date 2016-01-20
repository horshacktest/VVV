function roman (romannumeral) {
  var numberLookup = {
    I: 1,
    V: 5,
    X: 10,
    C: 100,
    D: 500,
    M: 1000
  }

  var romannumeralarray = romannumeral.split('')
  var arabic = 0

  arabic = romannumeralarray.reduceRight(
    function (accumulator, currentromandigit, index, array) {
      var currentValue = numberLookup[currentromandigit]
      var previousValue = accumulator > 0 ? numberLookup[array[index + 1]] : 0
      accumulator += (currentValue >= previousValue) ? currentValue : -currentValue
      return accumulator
    }, 0)
  return arabic
}

module.exports = roman
