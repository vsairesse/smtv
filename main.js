const rndInt = (n) => {
    const num = Math.round(Math.random() * n)
    return num
}

const symb = () => {
    let num = Math.round(Math.random() * 3)
    let s = '>'

    switch (num) {
        case 0:
            s = 'gt'
            break;
        case 1:
            s = 'geq'
            break;
        case 2:
            s = 'lt'
            break;
        case 3:
            s = 'leq'
            break;
    }

    return s;
}