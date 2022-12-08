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

let highestScenicScore = 0;

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    let left = 0,
      right = 0,
      top = 0,
      bottom = 0;

    // trees from left
    for (let k = j - 1; k >= 0; k--) {
      left += 1;
      if (grid[i][k] >= grid[i][j]) {
        break;
      }
    }

    // trees from right
    for (let k = j + 1; k < grid[i].length; k++) {
      right += 1;
      if (grid[i][k] >= grid[i][j]) {
        break;
      }
    }

    // trees from top
    for (let k = i - 1; k >= 0; k--) {
      top += 1;
      if (grid[k][j] >= grid[i][j]) {
        break;
      }
    }

    // trees from bottom
    for (let k = i + 1; k < grid.length; k++) {
      bottom += 1;
      if (grid[k][j] >= grid[i][j]) {
        break;
      }
    }

    console.log("i j val:", i, j, grid[i][j]);
    console.log(top, left, right, bottom);
    const scenicScore = left * right * top * bottom;
    if (scenicScore > highestScenicScore) {
      highestScenicScore = scenicScore;
    }
  }
}

console.log(highestScenicScore);
