const rest = new Map();
rest.set("name", "kabul resturant");
rest.set(1, "enghelab, tehran");
console.log(rest.set(2, "barchi, kabul"));

rest
  .set("categories", ["bolani", "ashak", "ghormeh"])
  .set("open", 11)
  .set("close", 21)
  .set(true, "we are open :D")
  .set(false, "we are close:");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.has("categories"));
rest.delete(2);
