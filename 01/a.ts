import * as p from "https://deno.land/std@0.165.0/path/mod.ts";

const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt"))
);

// delim by new line into array
// iterate through array adding values to count until delim by blank
// new array pushes a count
// iterate through new array finding position of max

const delimByNewline = input.split(/\r?\n/);

let newArrayValues: number[] = [];
let count = 0;
delimByNewline.map((calorieVal) => {
  if (calorieVal === "") {
    newArrayValues.push(count);
    count = 0;
  } else {
    count += Number(calorieVal);
  }
});
newArrayValues.push(count);

console.log(newArrayValues);
let newTotal = 0;

let maxVal = Math.max(...newArrayValues);
newTotal += maxVal;
let index = newArrayValues.indexOf(maxVal);
newArrayValues.splice(index, 1);
console.log(newArrayValues);
console.log(newTotal);

maxVal = Math.max(...newArrayValues);
newTotal += maxVal;
index = newArrayValues.indexOf(maxVal);
newArrayValues.splice(index, 1);
console.log(newTotal);

maxVal = Math.max(...newArrayValues);
newTotal += maxVal;
index = newArrayValues.indexOf(maxVal);
newArrayValues.splice(index, 1);
console.log(newTotal);
