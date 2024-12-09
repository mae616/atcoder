function main(input) {
  const [n, t, a] = input.split(" ").map((item) => Number(item));

  if (t === a) {
    console.log("No");
    return;
  }

  if (t > a) {
    if (t < a + (n - (t + a))) {
      console.log("No");
      return;
    }
  } else {
    if (a < t + (n - (t + a))) {
      console.log("No");
      return;
    }
  }

  console.log("Yes");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
