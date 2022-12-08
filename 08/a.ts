import * as p from "https://deno.land/std@0.165.0/path/mod.ts";

const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt"))
);

// const input = await Deno.readTextFile(
//   p.fromFileUrl(import.meta.resolve("./test_input.txt"))
// );

const grid = input
  .split("\n")
  .map((row) => row.split("").map((val) => parseInt(val, 10)));

let numVisible = 0;

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    // is max from left
    if (grid[i][j] > Math.max(...grid[i].slice(0, j))) {
      numVisible += 1;
      continue;
    }
    // is max from right
    if (grid[i][j] > Math.max(...grid[i].slice(j + 1, grid[i].length))) {
      numVisible += 1;
      continue;
    }

    // is max from top
    if (grid[i][j] > Math.max(...grid.slice(0, i).map((row) => row[j]))) {
      numVisible += 1;
      continue;
    }

    // is max from bottom
    if (
      grid[i][j] >
      Math.max(...grid.slice(i + 1, grid.length).map((row) => row[j]))
    ) {
      numVisible += 1;
      continue;
    }
  }
}

console.log(numVisible);
