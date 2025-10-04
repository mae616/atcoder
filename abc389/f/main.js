function main(input) {
    const args = input.split("\n");
    const n = Number(args.shift());

    const rate = [];
    for (let i = 0; i < n; i++) {
        const [l, r] = args.shift().split(" ").map(Number);
        rate.push({ l, r });
    }

    const q = Number(args.shift());

    const query = [];
    for (let i = 0; i < q; i++) {
        query.push(Number(args.shift()));
    }

    for (const q of query) {
        let taka = q;

        for (const { l, r } of rate) {
            if (l <= taka && taka <= r) {
                taka++;
            }
        }
        console.log(taka);
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
