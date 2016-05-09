'use strict'
const levelDB = require('levelup')('./levelDB')
let games = []
for (let a = 0; a < 9; a++) {
    games[a] = []
    for (let b = 0; b < 9; b++) {
        games[a][b] = []
        for (let c = 0; c < 9; c++) {
            games[a][b][c] = []
            for (let d = 0; d < 9; d++) {
                games[a][b][c][d] = []
                for (let e = 0; e < 9; e++) {
                    games[a][b][c][d][e] = []
                }
            }
        }
    }
}

levelDB.createReadStream()
    .on('data', function(data) {
        if (data.value == '') {
            console.log(data.key);
        }
    })
    .on('error', function(err) {
        console.log('Oh my!', err)
    })
    .on('close', function() {
        console.log('Stream closed2')
    })
    .on('end', function() {
        console.log('Stream closed1')
    })
