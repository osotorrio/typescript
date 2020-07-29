// boolean
var isLearning = true;
// number
var decimalValue = 45;
var hexadecimalValue = 0xf00d;
var binaryValue = 10;
var octalValue = 484;
// string
var message = "Hello, my name is Oscar.\n\nI am " + decimalValue + " years old.";
// array
var even = [2, 4, 6, 8, 10];
var odd = [1, 3, 5, 7, 9]; // Generics
// tuple
var pair = ["Oscar", 45];
// enum
var Piece;
(function (Piece) {
    Piece[Piece["Rook"] = 5] = "Rook";
    Piece[Piece["Knight"] = 3] = "Knight";
    Piece[Piece["Bishop"] = 3] = "Bishop";
    Piece[Piece["Queen"] = 9] = "Queen";
    Piece[Piece["King"] = 100] = "King";
    Piece[Piece["Pawn"] = 1] = "Pawn";
})(Piece || (Piece = {}));
var queenValue = Piece.Queen;
var queenName = Piece[Piece.Queen];
// any
var notSure = 4;
notSure = "maybe a string instead";
var crazyArray = ["hello", 100, true];
crazyArray[0] = 55;
// void
function warnUser() {
    console.log("This is my warning message");
}
