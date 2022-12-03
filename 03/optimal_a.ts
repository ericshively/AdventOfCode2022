const input = await Deno.readTextFile("./input.txt");
// const input = await Deno.readTextFile("./test.txt");

const lines = input.split("\n");

const letterToNumber = (letter: string) => {
  return (
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(letter) + 1
  );
};

let sum = 0;

const getFirstHalfOfString = (str: string) => {
  return str.slice(0, str.length / 2);
};

const getSecondHalfOfString = (str: string) => {
  return str.slice(str.length / 2);
};

for (const line of lines) {
  const firstHalf = getFirstHalfOfString(line)
    .split("")
    .map((l) => letterToNumber(l));
  const secondHalf = getSecondHalfOfString(line)
    .split("")
    .map((l) => letterToNumber(l));

  let c = 0;

  firstHalf.forEach((v) => {
    if (secondHalf.includes(v)) {
      c = v;
    }
  });

  sum += c;
}

console.log(sum);
