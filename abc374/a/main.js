function main(input) {
  const args = input.split("\n");
  if (args[0].endsWith("san")) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
