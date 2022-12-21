import * as p from "https://deno.land/std@0.165.0/path/mod.ts";

const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt"))
);

// const input = await Deno.readTextFile(
//   p.fromFileUrl(import.meta.resolve("./test_input.txt"))
// );

console.log(input);

const grid = Array.from(Array(100), () => new Array(100).fill("."));

console.log(grid);

const instructions = input.split("\n");

let h = [50, 50];
let t = [50, 50];
let visited = new Set();

for (let instruction of instructions) {
  let [direction, strSpaces] = instruction.split(" ");
  let spaces = parseInt(strSpaces, 10);
  for (let i = 0; i < spaces; i++) {
    if (direction === "R") {
      // h is northeast
      if (h[0] > t[0] && h[1] < t[1]) {
        h[0]++;
        t[0]++;
        t[1]--;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // h is southeast
      if (h[0] > t[0] && h[1] > t[1]) {
        h[0]++;
        t[0]++;
        t[1]++;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // h is southwest
      if (h[0] < t[0] && h[1] > t[1]) {
        h[0]++;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // h is northwest
      if (h[0] < t[0] && h[1] < t[1]) {
        h[0]++;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // non diagonal
      h[0]++;
      if (t[0] < h[0] - 1) {
        t[0]++;
      }
    }

    if (direction === "L") {
      // h is northeast
      if (h[0] > t[0] && h[1] < t[1]) {
        h[0]--;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // h is southeast
      if (h[0] > t[0] && h[1] > t[1]) {
        h[0]--;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // h is southwest
      if (h[0] < t[0] && h[1] > t[1]) {
        h[0]--;
        t[0]--;
        t[1]++;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // h is northwest
      if (h[0] < t[0] && h[1] < t[1]) {
        h[0]--;
        t[0]--;
        t[1]--;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // non diagonal
      h[0]--;
      if (t[0] > h[0] + 1) {
        t[0]--;
      }
    }

    if (direction === "U") {
      // h is northeast
      if (h[0] > t[0] && h[1] < t[1]) {
        h[1]--;
        t[0]++;
        t[1]--;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // h is southeast
      if (h[0] > t[0] && h[1] > t[1]) {
        h[1]--;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // h is southwest
      if (h[0] < t[0] && h[1] > t[1]) {
        h[1]--;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // h is northwest
      if (h[0] < t[0] && h[1] < t[1]) {
        h[1]--;
        t[0]--;
        t[1]--;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      h[1]--;
      if (t[1] > h[1] + 1) {
        t[1]--;
      }
    }

    if (direction === "D") {
      // h is northeast
      if (h[0] > t[0] && h[1] < t[1]) {
        h[1]++;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // h is southeast
      if (h[0] > t[0] && h[1] > t[1]) {
        h[1]++;
        t[0]++;
        t[1]++;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // h is southwest
      if (h[0] < t[0] && h[1] > t[1]) {
        h[1]++;
        t[0]--;
        t[1]++;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // h is northwest
      if (h[0] < t[0] && h[1] < t[1]) {
        h[1]++;
        visited.add([t[0], t[1]].join(","));
        continue;
      }

      // non diagonal
      h[1]++;
      if (t[1] < h[1] - 1) {
        t[1]++;
      }
    }

    visited.add([t[0], t[1]].join(","));
  }
}

console.log(visited.size);
