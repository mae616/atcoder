function main(input) {
  const args = input.split("\n");
  const [l, r] = args[0].split(" ").map(Number);

  if (l === 1 && r === 0) {
    console.log("Yes");
  } else if (l === 0 && r === 1) {
    console.log("No");
  } else {
    console.log("Invalid");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
