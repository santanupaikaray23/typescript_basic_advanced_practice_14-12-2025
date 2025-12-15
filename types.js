var myString;
var myNum;
var mybool;
var myvar;
var strArray;
var numArray;
var strNumTuple;
myString = "Hello, TypeScript!";
myNum = 42;
mybool = true;
myvar = "Santanu";
strArray = ["Apple", "Banana", "Cherry"];
numArray = [1, 2, 3, 4, 5];
strNumTuple = ["Age", 30, true, []];
var empid = 101;
var empname = "John Doe";
var employee = [1, "Santanu"];
console.log(employee);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
var Week;
(function (Week) {
    Week["Monday"] = "Monday";
    Week["Tuesday"] = "Tuesday";
    Week["Wednesday"] = "Wednesday";
    Week["Thursday"] = "Thursday";
    Week["Friday"] = "Friday";
    Week["Saturday"] = "Saturday";
    Week["Sunday"] = "Sunday";
})(Week || (Week = {}));
console.log(Week.Monday);
console.log(Week.Tuesday);
console.log(Week.Wednesday);
console.log(Week.Thursday);
console.log(Week.Friday);
console.log(Week.Saturday);
console.log(Week.Sunday);
var Circle;
(function (Circle) {
    Circle["Radius"] = "RADIUS";
    Circle[Circle["width"] = 10] = "width";
    Circle[Circle["height"] = 20] = "height";
})(Circle || (Circle = {}));
console.log(Circle.Radius);
console.log(Circle.width);
console.log(Circle.height);
function add(value1, value2) {
    return value1 + value2 + "Santanu";
}
console.log(add(5, 10));
function add(value1, value2) {
    return value1 + value2;
}
console.log(add("Santanu", "Paikaray"));
function add(value1, value2) {
    console.log(value1);
    console.log(value2);
    return value1 + value2;
}
console.log(add(5, 10));
console.log(add("Santanu", "Paikaray"));
