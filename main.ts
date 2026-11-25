import * as fs from "node:fs";

const entry =
  "Don't hand Arif the keys to your motorbike outside the lantern-lit square on festival night, no matter how hard he begs.\n" +
  "The crash shattered his leg and your friendship in a single night, and you spent the next year paying off a bike you were too guilty to ride again.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
