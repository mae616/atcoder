function main(input) {
  const args = input.split("\n");
  const [ab, ac, bc] = args[0].split(" ");

  const ary = [];
  if (ab === "<") {
    ary.push("B");
    ary.push("A");
  } else {
    ary.push("A");
    ary.push("B");
  }

  if (ac === "<") {
    if (bc === "<") {
      ary.unshift("C");
    } else {
      //bc === ">"
      ary.splice(ary.findIndex((item) => item === "B") + 1, 0, "C");
    }
  } else {
    // ac === ">"
    if (bc === "<") {
      ary.splice(ary.findIndex((item) => item === "A") + 1, 0, "C");
    } else {
      // bc === ">"
      ary.push("C");
    }
  }
  console.log(ary[1]);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
