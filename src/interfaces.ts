// anonymous interface
const mySquare = {
    row: 5,
    column: "d",
};

function logMySquare(square: { row: number; column: string }) {
    console.log(`Square: ${square.column}${square.row}`);
}

logMySquare(mySquare);

// named interface
const yourSquare = {
    row: 5,
    column: "d",
};

interface IYourSquare {
    row: number;
    column: string;
}

function logYourSquare(square: IYourSquare) {
    console.log(`Square: ${square.column}${square.row}`);
}

logYourSquare(yourSquare);

// optional properties
const hisSquare = {
    row: 5,
    column: "d",
};

interface IHisSquare {
    row: number;
    column: string;
    color?: string;
}

function logHisSquare(square: IHisSquare) {
    if (square.color) {
        console.log(`Square: ${square.column}${square.row}. Color: ${square.color}`);
    } else {
        console.log(`Square: ${square.column}${square.row}`);
    }
}

logHisSquare(hisSquare);

// readonly properties
const herSquare = {
    row: 5,
    column: "d",
};

interface IHerSquare {
    readonly row: number;
    column: string;
}

function logHerSquare(square: IHerSquare) {
    try {
        // square.row = 40;
    } catch (error) {
        console.log("Cannot assign to 'row' because it is a read-only property.");
    }
}

logHerSquare(herSquare);

/*  

    Excess Property Checks
    https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks

*/

// Function Types
let isTheSumeEven: ICheckNumbers;

interface ICheckNumbers {
    (a: number, b: number): boolean;
}

isTheSumeEven = function (x: number, y: number): boolean {
    return (x + y) % 2 === 0;
};

// Indexable Types
let players: IArrayPlayers;

interface IArrayPlayers {
    [index: number]: string;
}

players = ["Kasparov", "Carlsen", "Karpov"];

// Class Types
class Clock implements IClockInterface {
    currentTime: Date = new Date();

    setTime(datetime: Date) {
        this.currentTime = datetime;
    }
}

interface IClockInterface {
    currentTime: Date;
    setTime(datetime: Date): void;
}
