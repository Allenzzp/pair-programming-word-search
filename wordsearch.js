const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const row = letters.length;
    const col = letters[0].length;
    const verticalJoin = [];
    for (let j = 0; j < col; j++) {
        let wd = "";
        for (let i = 0; i < row; i++) {
            wd += letters[i][j];
        }
        verticalJoin.push(wd);
    }
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch