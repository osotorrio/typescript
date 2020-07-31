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
