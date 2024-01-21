let dic = Math.trunc(Math.random() * 6) + 1;


while (dic !== 6) {
  console.log(`you rolled a ${dic}`);

  dic = Math.trunc(Math.random() * 6) + 1;

  if (dic === 6) console.log("loop is about to end...");
}
