import * as p from "https://deno.land/std@0.165.0/path/mod.ts";

const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt"))
);

const totals = input
  .split("\n\n")
  .map((elf) => {
    return elf.split("\n").reduce((acc, val) => acc + parseInt(val), 0);
  })
  .sort()
  .reverse();

console.log(totals[0] + totals[1] + totals[2]);
