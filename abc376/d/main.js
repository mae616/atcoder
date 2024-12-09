function main(input) {
  const args = input.split("\n");
  const [n, m] = args.shift().split(" ").map(Number);

  const hen = {};
  args.forEach((v) => {
    const a = v.split(" ");
    if (!(a[0] in hen)) hen[a[0]] = [a[1]];
    else hen[a[0]].push(a[1]);
  });

  if (!("1" in hen)) {
    console.log(-1);
    return;
  }

  let min = Infinity;
  (function recursion(keiroTemp, count) {
    for (let i = 0; i < keiroTemp.length; i++) {
      if (keiroTemp[i] === "1") {
        min = Math.min(min, count);
        return;
      }

      if (!(keiroTemp[i] in hen)) continue;
      recursion(hen[keiroTemp[i]], count + 1);
    }
  })(hen["1"], 1);

  console.log(min === Infinity ? -1 : min);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
