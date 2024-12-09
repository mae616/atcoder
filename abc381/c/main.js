function main(input) {
  const args = input.split("\n");
  const n = Number(args[0]);
  const s = args[1];

  let max = 1;
  let index = s.indexOf("/");
  while (index !== -1) {
    for (let i = 1; index - i >= 0 && index + i < n; i++) {
      if (s[index - i] === "1" && s[index + i] === "2") {
        max = Math.max(max, i * 2 + 1);
      } else {
        break;
      }
    }

    index = s.indexOf("/", index + 1);
  }

  console.log(max);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
