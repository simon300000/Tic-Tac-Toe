'use strict'
const levelDB = require('levelup')('./levelDB', {
    valueEncoding: 'json'
})
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

let borde1 = borde()
for (var i = 0; i < 9; i++) {
    console.log(i);
}
