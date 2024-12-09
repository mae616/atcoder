function main(input) {
  const args = input.split("\n");
  const [n, m] = args.shift().split(" ");

  const k = [];
  for (let i = 0; i < Number(m); i++) {
    const [a, b] = args[i].split(" ");
    if (b === "M") {
      if (!k.includes(a)) {
        console.log("Yes");
        k.push(a);
      } else {
        console.log("No");
      }
    } else {
      console.log("No");
    }
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
