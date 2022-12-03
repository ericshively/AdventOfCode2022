import * as p from "https://deno.land/std@0.165.0/path/mod.ts";

const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt"))
);

const inputArr = input.split("\n");

let total = 0;

inputArr.map((elem) => {
  let halfIndex = elem.length / 2;
  let firstHalfStr = elem.substring(0, halfIndex);
  let secondHalfStr = elem.substring(halfIndex);
  console.log(firstHalfStr);
  console.log(secondHalfStr);
  let firstHalfMap: any = {};

  for (let char of firstHalfStr) {
    firstHalfMap[char] = 1;
  }

  let asciiVal = 0;
  for (let char of secondHalfStr) {
    if (firstHalfMap[char] == 1) {
      console.log(char);
      if (char == char.toUpperCase()) {
        asciiVal = char.charCodeAt(0) - 38;
        console.log("upper val");
        console.log(asciiVal);
      } else {
        asciiVal = char.charCodeAt(0) - "a".charCodeAt(0) + 1;
      }
      console.log(asciiVal);
    }
  }

  total += asciiVal;
  console.log(asciiVal);
});
// for each array element
// split element in 2
// find common element in both halves
// convert common element to ascii
// add up ascii int values

console.log(total);
