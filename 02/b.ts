import * as p from "https://deno.land/std@0.165.0/path/mod.ts";

const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt"))
);

const my_result = input.split("\n").reduce<number | undefined>((acc, val) => {
  const matchArray = val.split(" ");
  if (matchArray[1] == "X") {
    const count = acc! + 1;
    if (matchArray[0] == "A") {
      return count + 3;
    }
    if (matchArray[0] == "B") {
      return count + 0;
    }
    if (matchArray[0] == "C") {
      return count + 6;
    }
  } else if (matchArray[1] == "Y") {
    const count = acc! + 2;
    if (matchArray[0] == "A") {
      return count + 6;
    }
    if (matchArray[0] == "B") {
      return count + 3;
    }
    if (matchArray[0] == "C") {
      return count + 0;
    }
  } else if (matchArray[1] == "Z") {
    const count = acc! + 3;
    if (matchArray[0] == "A") {
      return count + 0;
    }
    if (matchArray[0] == "B") {
      return count + 6;
    }
    if (matchArray[0] == "C") {
      return count + 3;
    }
  } else {
    return acc;
  }
}, 0);

console.log(my_result);
