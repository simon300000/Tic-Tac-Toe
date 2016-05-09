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
