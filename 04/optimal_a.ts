import * as p from "https://deno.land/std@0.165.0/path/mod.ts";

const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt"))
);

// const input = await Deno.readTextFile(
//   p.fromFileUrl(import.meta.resolve("./test_input.txt"))
// );

const pairs = input.split("\n").map((line) => line.split(","));

let overlap_count = 0;

for (const pair of pairs) {
  const [left_start, left_end] = pair[0].split("-").map((x) => parseInt(x));
  const [right_start, right_end] = pair[1].split("-").map((x) => parseInt(x));

  if (left_start >= right_start && left_end <= right_end) {
    overlap_count++;
  } else if (left_start <= right_start && left_end >= right_end) {
    overlap_count++;
  }
}

console.log(overlap_count);
