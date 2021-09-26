const fs = require('fs')

fs.readFile('day4data.txt', (err, data) => {
  if (err) throw err;
  var passports = data.toString().split('\n\r\n')
  var validCounter = 0
  for (var x = 0; x < passports.length; x++) {
    var passportCharacters = passports[x].split('')
    var colonCounter = 0
    for (var y = 0; y < passportCharacters.length; y++) {
      if (passportCharacters[y] == ":") {
        colonCounter += 1
      }
    }
    if (colonCounter == 8) {
      validCounter += 1
    } else if (colonCounter == 7 && (passports[x].includes("cid") == false)) {
      validCounter += 1
    }
  }
  console.log("Valid passports: " + validCounter)
})