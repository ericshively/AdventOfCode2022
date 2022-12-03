import * as p from "https://deno.land/std@0.165.0/path/mod.ts";

const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt"))
);

const inputArr = input.split("\n");

let total = 0;
let line = 1;
let firstMap: any = {};
let secondMap: any = {};

inputArr.map((rucksackStr) => {
  if (line == 1) {
    for (let char of rucksackStr) {
      firstMap[char] = 1;
    }
    line++;
    return;
  }

  if (line == 2) {
    for (let char of rucksackStr) {
      secondMap[char] = 1;
    }
    line++;
    return;
  }

  if (line == 3) {
    let asciiVal = 0;
    for (let char of rucksackStr) {
      if (firstMap[char] == 1 && secondMap[char] == 1) {
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
    line = 1;
    firstMap = {};
    secondMap = {};

    console.log(asciiVal);
  }
});

console.log(total);
