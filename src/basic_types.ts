// boolean
let isLearning: boolean = true;

// number
let decimalValue: number = 45;
let hexadecimalValue: number = 0xf00d;
let binaryValue: number = 0b1010;
let octalValue: number = 0o744;

// string
let message: string = `Hello, my name is Oscar.

I am ${decimalValue} years old.`;

// array
let even: number[] = [2, 4, 6, 8, 10];
let odd: Array<number> = [1, 3, 5, 7, 9]; // Generics

// tuple
let pair: [string, number] = ["Oscar", 45];

// enum
enum Piece {
    Rook = 5,
    Knight = 3,
    Bishop = 3,
    Queen = 9,
    King = 100,
    Pawn = 1,
}

let queenValue: Piece = Piece.Queen;
let queenName: string = Piece[Piece.Queen];

// any
let notSure: any = 4;
notSure = "maybe a string instead";

let crazyArray: any[] = ["hello", 100, true];
crazyArray[0] = 55;

// void
function warnUser(): void {
    console.log("This is my warning message");
}

// null, undefined and object

// never
function error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}

// type assertions
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
