var input = [
    ['', '>', '-', '-', '-', 'A', '-', '@', '-', '+'],
    ['', '', '', '', '', '', '', '', '', '|'],
    ['', '+', '-', 'U', '-', '+', '', '', '', 'C'],
    ['', '|', '', '', '', '|', '', '', '', '|'],
    ['', 's', '', '', '', 'C', '-', '-', '-', '+']
];
var path = [];
var letters = [];
var locationOfRow = null;
var locationOfColumn = null;
for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input[i].length; j++) {
        if (input[i][j] === '>') {
            path.push('@');
            locationOfRow = i;
            locationOfColumn = j;
            break;
        }
    }
    if (locationOfRow !== null && locationOfColumn !== null) {
        break;
    }
}
if (locationOfColumn !== null && locationOfRow !== null) {
    while (input[locationOfRow][locationOfColumn] !== 's') {
        if (input[locationOfRow].length > locationOfColumn + 1
            && input[locationOfRow][locationOfColumn + 1] !== '') {
            input[locationOfRow][locationOfColumn] = '';
            locationOfColumn++;
            path.push(input[locationOfRow][locationOfColumn]);
        }
        else if (locationOfColumn - 1 >= 0
            && input[locationOfRow][locationOfColumn - 1] !== '') {
            input[locationOfRow][locationOfColumn] = '';
            locationOfColumn--;
            path.push(input[locationOfRow][locationOfColumn]);
        }
        else if (input.length > locationOfRow + 1
            && input[locationOfRow + 1][locationOfColumn] !== '') {
            input[locationOfRow][locationOfColumn] = '';
            locationOfRow++;
            path.push(input[locationOfRow][locationOfColumn]);
        }
        else if (locationOfRow - 1 >= 0
            && input[locationOfRow - 1][locationOfColumn] !== '') {
            input[locationOfRow][locationOfColumn] = '';
            locationOfRow--;
            path.push(input[locationOfRow][locationOfColumn]);
        }
        if (input[locationOfRow][locationOfColumn].match(new RegExp('[A-Z]'))) {
            letters.push(input[locationOfRow][locationOfColumn]);
        }
    }
}
console.log(path);
console.log(letters);
