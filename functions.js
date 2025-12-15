function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(5, 10));
function getAddition(num1, num2) {
    return num1 + num2;
}
console.log(getSum(5, 10));
console.log(getAddition(51, 10));
var mySum = function (num1, num2) {
    return num1 + num2;
};
console.log(mySum("Santanu", 5));
var myAddition = function (num1, num2) {
    return num1 + num2;
};
console.log(myAddition(5, "Santanu"));
var AddNumbers = function (num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(AddNumbers("1", "2"));
// function getName(firstName: string, lastName?: string): string{
//     console.log(lastName)
//     if(lastName==null){
//         return firstName;
//     }
//     return firstName + '' + lastName
// }
// console.log(getName('Santanu'))
// console.log(undefined == null)
//     console.log(undefined === null)
function myVoidWithUndefined() {
    return undefined;
}
console.log(myVoidWithUndefined());
