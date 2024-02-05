const gameEvents = new Map([
  [17, "goal"],
  [36, "Substitition"],
  [47, "goal"],
  [61, "Substitition"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitition"],
  [72, "Substitition"],
  [76, "goal"],
  [86, "goal"],
  [92, "Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event hapened, on average, every ${time / gameEvents.size} minutes`
);

console.log(gameEvents.size);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}:${event}`);
}
