
for (var line = "#"; line.length < 8; line += "#")
console.log(line);



for (var n = 1; n <= 100; n++) {
var output = "";
if (n % 3 == 0) output += "Fizz";
if (n % 5 == 0) output += "Buzz";
console.log(output || n);
}



var size = 8;
var board = "";

for (let y = 0; y < size; y++) {
for (let x = 0; x < size; x++) {
if ((x + y) % 2 == 0) {
board += " ";
} else {
board += "#";
}
}
board += "\n";
}

console.log(board);




function isEven(n) {
if (n == 0) return true;
else if (n == 1) return false;
else if (n < 0) return isEven(-n);
else return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false



function range(start, end, step = start < end ? 1 : -1) {
let array = [];

if (step > 0) {
for (let i = start; i <= end; i += step) array.push(i);
} else {
for (let i = start; i >= end; i += step) array.push(i);
}
return array;
}

function sum(array) {
let total = 0;
for (let value of array) {
total += value;
}
return total;
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55





function reverseArray(array) {
let output = [];
for (let i = array.length - 1; i >= 0; i--) {
output.push(array[i]);
}
return output;
}

function reverseArrayInPlace(array) {
for (let i = 0; i < Math.floor(array.length / 2); i++) {
let old = array[i];
array[i] = array[array.length - 1 - i];
array[array.length - 1 - i] = old;
}
return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]




function arrayToList(array) {
let list = null;
for (let i = array.length - 1; i >= 0; i--) {
list = {value: array[i], rest: list};
}
return list;
}

function listToArray(list) {
let array = [];
for (let node = list; node; node = node.rest) {
array.push(node.value);
}
return array;
}

function prepend(value, list) {
return {value, rest: list};
}

function nth(list, n) {
if (!list) return undefined;
else if (n == 0) return list.value;
else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20




function deepEqual(a, b) {
if (a === b) return true;

if (a == null || typeof a != "object" ||
b == null || typeof b != "object") return false;

let keysA = Object.keys(a), keysB = Object.keys(b);

if (keysA.length != keysB.length) return false;

for (let key of keysA) {
if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
}

return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

