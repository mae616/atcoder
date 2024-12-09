function main(input) {
  const args = input.split("\n");
  const [n, k] = args[0].split(" ").map(Number);
  const s = args[1].split("");

  let count = 0;
  let temp = 0;
  let flg = false;
  for (let i = 0; i < n; i++) {
    if (s[i] === "O" && !flg) {
      flg = true;
      temp = 1;
    } else if (s[i] === "O" && flg) {
      temp++;
    } else if (s[i] === "X" && flg) {
      flg = false;
      temp = 0;
    }

    if (temp === k) {
      count++;
      flg = false;
      temp = 0;
    }
  }

  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
