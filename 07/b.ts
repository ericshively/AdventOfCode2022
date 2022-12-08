import * as p from "https://deno.land/std@0.165.0/path/mod.ts";

const input = await Deno.readTextFile(
  p.fromFileUrl(import.meta.resolve("./input.txt"))
);

// const input = await Deno.readTextFile(
//   p.fromFileUrl(import.meta.resolve("./test_input.txt"))
// );

const lines = input.split("\n");
console.log(lines);

let smallDirectoryCount = 0;

type directory = {
  size: number;
  name: string;
  children: directory[];
};

const directoryStack: string[] = [];

const directories: {
  [key: string]: directory;
} = {};

for (const line of lines) {
  if (line.includes("$ cd")) {
    // cd command
    const dirInto = line.split(" ")[2];
    if (dirInto == "..") {
      directoryStack.pop();
    } else {
      // new directory
      if (Object.keys(directories).length === 0) {
        // add root directory
        directories["/"] = { size: 0, name: "/", children: [] };
        directoryStack.push("/");
      } else {
        // add other directories
        if (directories[dirInto] == undefined) {
          const directoryObj = { size: 0, name: dirInto, children: [] };
          // convert array of string to just string
          let fullPath = directoryStack.join(" ");
          directories[fullPath].children.push(directoryObj);
          directoryStack.push(dirInto);
          fullPath = directoryStack.join(" ");
          directories[fullPath] = directoryObj;
        } else {
          directoryStack.push(dirInto);
        }
      }
    }
  } else if (line.includes("$ ls")) {
    // ls command
  } else if (line.split(" ")[0] == "dir") {
    // directory
  } else {
    console.log(line);
    // file; add to current directory size
    const fullPath = directoryStack.join(" ");
    directories[fullPath].size += line
      .split(" ")
      .map((val) => parseInt(val, 10))[0];
  }
}

function accumulateSubDirSizes(dir: directory) {
  let size = dir.size;
  for (const child of dir.children) {
    size += accumulateSubDirSizes(child);
  }
  dir.size = size;
  return size;
}

accumulateSubDirSizes(directories["/"]);

// get list of directory sizes
// sort
// find first directory that is > root_size - 40000000
const dirSizes = Object.keys(directories).map((key) => directories[key].size);
dirSizes.sort((a, b) => b - a).reverse();
console.log(dirSizes);
for (const val of dirSizes) {
  if (val >= dirSizes[dirSizes.length - 1] - 40000000) {
    console.log(val);
    break;
  }
}

// for (const key in directories) {
//   const dir = directories[key];
//   if (dir.size <= 100000) {
//     smallDirectoryCount += dir.size;
//   }
// }

console.log(directories);
// 2195372
