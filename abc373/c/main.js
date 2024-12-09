function main(input) {
  const args = input.split("\n");
  const n = Number(args[0]);
  const a = args[1].split(" ").map(Number);
  const b = args[2].split(" ").map(Number);

  console.log(Math.max(...a) + Math.max(...b));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
