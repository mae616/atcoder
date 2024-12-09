function main(input) {
  const args = input.split("\n");
  const n = Number(args[0]);
  const s = args[1];

  let count = 0;
  for (let i = 0; i < n - 2; i++) {
    if (s[i] === "#" && s[i + 2] === "#" && s[i + 1] === ".") {
      count++;
    }
  }
  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
