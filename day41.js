const fs = require('fs')

fs.readFile('data/day4.txt', (err, data) => {
    var dataP = data.toString().split('/\n\n+/')
    console.log(dataP)

    for (var x = 0; x < dataP.length; x++) {
 
        var dataP2 = dataP[x].split(' ')

        console.log(dataP2)

    }
})