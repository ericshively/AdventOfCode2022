import * as p from "https://deno.land/std@0.165.0/path/mod.ts";

const input: string = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt"))
);

// const input = await Deno.readTextFile(
//   p.fromFileUrl(import.meta.resolve("./test_input.txt"))
// );

// loop through input 1 char at time, keep track of position/index
// until window (4) is full
// check if window contains duplicate chars, if not you're done
// if it does, move window forward by 1 char, removing the first char in window

const window: string[] = [];

for (let i = 0; i < input.length; i++) {
  if (window.length < 13) {
    window.push(input[i]);
  } else {
    window.push(input[i]);
    if (new Set(window).size === window.length) {
      console.log(i + 1);
      break;
    } else {
      window.shift();
    }
  }
}

console.log(input);
