function main(input) {
  const args = input.split("\n");
  const [n, m] = args.shift().split(" ").map(Number);

  const vertex = [];
  for (let i = 0; i < m; i++) {
    const [a, b, c] = args[i].split(" ").map(Number);
    vertex.push({ from: a, to: b, weight: c });
  }

  vertex
    .sort((a, b) => {
      return a.from - b.from;
    })
    .reverse();

  const result = new Array(n).fill(0);

  const recursion = (item, toWeight) => {
    result[item.to - 1] = toWeight;

    const fromIndex = vertex.filter((aitem, index) => item.to === aitem.from);
    if (fromIndex.length === 0) {
      return;
    }
    for (let j = 0; j < fromIndex.length; j++) {
      return recursion(fromIndex[j], toWeight + fromIndex[j].weight);
    }
  };

  for (i = 0; i < vertex.length; i++) {
    recursion(vertex[i], result[vertex[i].from - 1] + vertex[i].weight);
  }

  console.log(result.join(" "));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
