function main(input) {
  const args = input.split("\n");
  const n = Number(args[0]);
  const s = args[1];

  if (n === 1 && s == "/") {
    console.log("Yes");
    return;
  }

  if (n % 2 !== 1) {
    console.log("No");
    return;
  }

  const mid = (n + 1) / 2;

  if (!s.startsWith("1".repeat(mid - 1))) {
    console.log("No");
    return;
  }

  if (s[mid - 1] !== "/") {
    console.log("No");
    return;
  }

  if (!s.endsWith("2".repeat(mid - 1))) {
    console.log("No");
    return;
  }

  console.log("Yes");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
