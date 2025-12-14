let myString: string;
let myNum: number;
let mybool: boolean;
let myvar: any;

let strArray: string[];
let numArray: number[];
let strNumTuple: [string, number,boolean,any];

myString = "Hello, TypeScript!";
myNum = 42;
mybool = true;  
myvar = "Santanu";
strArray = ["Apple", "Banana", "Cherry"];
numArray = [1, 2, 3, 4, 5];
strNumTuple = ["Age", 30,true,[]];

let empid: number = 101;
let empname: string = "John Doe";
let employee: [number, string] = [1,"Santanu"];

console.log(employee)

enum Direction {
    Up,
    Down,
    Left,
    Right   
}
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

enum Week {
    Monday="Monday",
    Tuesday="Tuesday",
    Wednesday="Wednesday",
    Thursday="Thursday",
    Friday="Friday",
    Saturday="Saturday",
    Sunday="Sunday"
}

console.log(Week.Monday);
console.log(Week.Tuesday);
console.log(Week.Wednesday);
console.log(Week.Thursday);
console.log(Week.Friday);
console.log(Week.Saturday);
console.log(Week.Sunday);

enum Circle {
    Radius="RADIUS",
    width=10,
    height=20
}
console.log(Circle.Radius);
console.log(Circle.width);
console.log(Circle.height);

function add(value1:any, value2:any): number {
    return value1 + value2+"Santanu";
}
console.log(add(5, 10));

function add(value1:any, value2:any): string {
    return value1 + value2;
}
console.log(add("Santanu", "Paikaray"));