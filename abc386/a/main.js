function main(input) {
    const args = input.split("\n");
    const cards = args[0].split(" ");

    const hash = {};
    for (const card of cards) {
        if (card in hash) {
            hash[card]++;
        } else {
            hash[card] = 1;
        }
    }

    if (Object.keys(hash).length !== 2) {
        console.log("No");
        return;
    }

    const [key1, key2] = Object.keys(hash);
    if (
        (hash[key1] === 2 && hash[key2] === 2) ||
        (hash[key1] === 3 && hash[key2] === 1) ||
        (hash[key1] === 1 && hash[key2] === 3)
    ) {
        console.log("Yes");
        return;
    }

    console.log("No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
