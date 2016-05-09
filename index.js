'use strict'
const levelDB = require('levelup')('./levelDB')
const borde = () => [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
]

let whoWin = (borde) => {
    if (borde[0][0] === true) {
        if (borde[0][1] === true) {
            if (borde[0][2] === true) {
                return true
            }
        }
        if (borde[1][0] === true) {
            if (borde[2][0] === true) {
                return true
            }
        }
        if (borde[1][1] === true) {
            if (borde[2][2] === true) {
                return true
            }
        }
    }
    if (borde[0][1] === true) {
        if (borde[1][1] === true) {
            if (borde[2][1] === true) {
                return true
            }
        }
    }
    if (borde[0][2] === true) {
        if (borde[1][2] === true) {
            if (borde[2][2] === true) {
                return true
            }
        }
        if (borde[1][1] === true) {
            if (borde[2][0] === true) {
                return true
            }
        }
    }
    if (borde[1][0] === true) {
        if (borde[1][1] === true) {
            if (borde[1][2] === true) {
                return true
            }
        }
    }
    if (borde[2][0] === true) {
        if (borde[2][1] === true) {
            if (borde[2][2] === true) {
                return true
            }
        }
    }
    //test black
    if (borde[0][0] === false) {
        if (borde[0][1] === false) {
            if (borde[0][2] === false) {
                return false
            }
        }
        if (borde[1][0] === false) {
            if (borde[2][0] === false) {
                return false
            }
        }
        if (borde[1][1] === false) {
            if (borde[2][2] === false) {
                return false
            }
        }
    }
    if (borde[0][1] === false) {
        if (borde[1][1] === false) {
            if (borde[2][1] === false) {
                return false
            }
        }
    }
    if (borde[0][2] === false) {
        if (borde[1][2] === false) {
            if (borde[2][2] === false) {
                return false
            }
        }
        if (borde[1][1] === false) {
            if (borde[2][0] === false) {
                return false
            }
        }
    }
    if (borde[1][0] === false) {
        if (borde[1][1] === false) {
            if (borde[1][2] === false) {
                return false
            }
        }
    }
    if (borde[2][0] === false) {
        if (borde[2][1] === false) {
            if (borde[2][2] === false) {
                return false
            }
        }
    }
    return undefined
}

let place = (borde, num, pease) => {
    if (num == 1) {
        borde[0][0] = pease
    } else if (num == 2) {
        borde[0][1] = pease
    } else if (num == 3) {
        borde[0][2] = pease
    } else if (num == 4) {
        borde[1][0] = pease
    } else if (num == 5) {
        borde[1][1] = pease
    } else if (num == 6) {
        borde[1][2] = pease
    } else if (num == 7) {
        borde[2][0] = pease
    } else if (num == 8) {
        borde[2][1] = pease
    } else if (num == 9) {
        borde[2][2] = pease
    } else {
        return undefined
    }
    return borde
}

let play = (array) => {
    let Borde = borde()
    let player = false
    let winner = undefined
    let i
    for (i = 0; i < array.length; i++) {
        player = !player
        Borde = place(Borde, array[i], player)
        winner = whoWin(Borde)
        if (winner !== undefined) {
            return [winner, i]
        }
    }
    return [undefined, i]
}
let time = 0

let record = (results, step) => {
    let title = ''
    if (results[1] < 8) {
        let steps = results[1] + 1
        for (let i = 0; i < steps; i++) {
            title += step[i]
        }
    } else {
        for (let i = 0; i < step.length; i++) {
            title += step[i]
        }
    }
    levelDB.put(title, JSON.stringify(results[0]), function(err) {
        if (err) console.log('Ooops!', err)
        time++
        if (time % 2552 == 0) {
            console.log(Math.round(time / 255168 * 100) + '%')
        } else if (time == 255168) {
            console.log(Math.round(time / 255168 * 100) + '%')
        }
    })
}

for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
        if (a != b) {
            for (let c = 1; c < 10; c++) {
                if (a != c && b != c) {
                    for (let d = 1; d < 10; d++) {
                        if (a != d && b != d && c != d) {
                            for (let e = 1; e < 10; e++) {
                                if (a != e && b != e && c != e && d != e) {
                                    for (let f = 1; f < 10; f++) {
                                        if (a != f && b != f && c != f && d != f && e != f) {
                                            for (let g = 1; g < 10; g++) {
                                                if (a != g && b != g && c != g && d != g && e != g && f != g) {
                                                    for (let h = 1; h < 10; h++) {
                                                        if (a != h && b != h && c != h && d != h && e != h && f != h && g != h) {
                                                            for (let i = 1; i < 10; i++) {
                                                                if (a != i && b != i && c != i && d != i && e != i && f != i && g != i && h !== i) {
                                                                    let result = play([a, b, c, d, e, f, g, h, i])
                                                                    record(result, [a, b, c, d, e, f, g, h, i])
                                                                    switch (result[1]) {
                                                                        case 4:
                                                                            f = 10
                                                                        case 5:
                                                                            g = 10
                                                                        case 6:
                                                                            h = 10
                                                                        case 7:
                                                                            i = 10
                                                                        default:
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
