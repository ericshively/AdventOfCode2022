import * as p from "https://deno.land/std@0.165.0/path/mod.ts";

const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt"))
);

// const input = await Deno.readTextFile(
//   p.fromFileUrl(import.meta.resolve("./test_input.txt"))
// );

const lines = input.split("\n");
let overlap_count = 0;

for (let line of lines) {
  let pair = line.split(",");
  let left_start = parseInt(pair[0].split("-")[0], 10);
  let left_end = parseInt(pair[0].split("-")[1], 10);
  let right_start = parseInt(pair[1].split("-")[0], 10);
  let right_end = parseInt(pair[1].split("-")[1], 10);

  if (left_start <= right_end && right_start <= left_end) overlap_count++;
}

console.log(overlap_count);
