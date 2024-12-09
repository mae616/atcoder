function main(input) {
  const s = input.split("\n");

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].length === i + 1) {
      count++;
    }
  }

  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
