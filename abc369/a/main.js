function main(input) {
  const args = input.split("\n");
  const [a, b] = args[0].split(" ").map(Number);

  if (a === b) {
    console.log(1);
    return;
  } else if ((a > b && (a - b) % 2 === 1) || (a < b && (b - a) % 2 === 1)) {
    console.log(2);
    return;
  }
  console.log(3);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
