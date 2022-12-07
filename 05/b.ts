import * as p from "https://deno.land/std@0.165.0/path/mod.ts";

const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt"))
);

// const input = await Deno.readTextFile(
//   p.fromFileUrl(import.meta.resolve("./test_input.txt"))
// );

const [rawStacks, moves] = input.split("\n\n");

// parse each stack without numbers
const stackRows = rawStacks.split("\n");
const stackRowsMinusLast = stackRows.slice(0, stackRows.length - 1);
const reverseStackRows = stackRowsMinusLast.reverse();
console.log(reverseStackRows);

for (let row of reverseStackRows) {
  const splitRow = row.split("\t");
  console.log(splitRow);
}

// create stacks
type Stack = string[];

let stacks: Stack[] = Array.from({ length: 10 }, (_e) => []);

for (let rowString of reverseStackRows) {
  for (let i = 0; i < rowString.length; i += 4) {
    if (rowString[i] === " ") {
      // empty stack element
    } else if (rowString[i] === "[") {
      // push rowString[i + 1] to stack i / 4
      stacks[i / 4].push(rowString[i + 1]);
    }
  }
}

console.log(stacks);

// parse moves
const movesArray = moves.split("\n");
console.log(movesArray);
for (let move of movesArray) {
  console.log(move);
  const moveArray = move
    .split(/([0-9]+)/)
    .filter((val) => parseInt(val, 10))
    .map((val) => parseInt(val, 10));
  console.log(moveArray);

  // apply moves to stacks
  let charsToApplyInOrder = [];
  for (let i = 0; i < moveArray[0]; i++) {
    let elem = stacks[moveArray[1] - 1].pop();
    charsToApplyInOrder.push(elem!);
  }

  for (let elem of charsToApplyInOrder.reverse()) {
    stacks[moveArray[2] - 1].push(elem!);
  }
  console.log(stacks);
}

let output = "";
for (let stack of stacks) {
  output += stack.pop();
}

console.log(output);
// apply moves
// output top of each stack
