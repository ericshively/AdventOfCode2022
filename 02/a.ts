import * as p from "https://deno.land/std@0.165.0/path/mod.ts";

const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt"))
);

const my_result = input.split("\n").reduce<number | undefined>((acc, val) => {
  const matchArray = val.split(" ");
  if (matchArray[1] == "X") {
    const count = acc! + 0;
    if (matchArray[0] == "A") {
      return count + 3;
    }
    if (matchArray[0] == "B") {
      return count + 1;
    }
    if (matchArray[0] == "C") {
      return count + 2;
    }
  }
  if (matchArray[1] == "Y") {
    const count = acc! + 3;
    if (matchArray[0] == "A") {
      return count + 1;
    }
    if (matchArray[0] == "B") {
      return count + 2;
    }
    if (matchArray[0] == "C") {
      return count + 3;
    }
  }
  if (matchArray[1] == "Z") {
    const count = acc! + 6;
    if (matchArray[0] == "A") {
      return count + 2;
    }
    if (matchArray[0] == "B") {
      return count + 3;
    }
    if (matchArray[0] == "C") {
      return count + 1;
    }
  }
}, 0);

console.log(my_result);
