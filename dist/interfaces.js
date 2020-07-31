// anonymous interface
var mySquare = {
    row: 5,
    column: "d"
};
function logMySquare(square) {
    console.log("Square: " + square.column + square.row);
}
logMySquare(mySquare);
// named interface
var yourSquare = {
    row: 5,
    column: "d"
};
function logYourSquare(square) {
    console.log("Square: " + square.column + square.row);
}
logYourSquare(yourSquare);
// optional properties
var hisSquare = {
    row: 5,
    column: "d"
};
function logHisSquare(square) {
    if (square.color) {
        console.log("Square: " + square.column + square.row + ". Color: " + square.color);
    }
    else {
        console.log("Square: " + square.column + square.row);
    }
}
logHisSquare(hisSquare);
// readonly properties
var herSquare = {
    row: 5,
    column: "d"
};
function logHerSquare(square) {
    try {
        // square.row = 40;
    }
    catch (error) {
        console.log("Cannot assign to 'row' because it is a read-only property.");
    }
}
logHerSquare(herSquare);
