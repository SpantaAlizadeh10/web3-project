const friends = ["reza", "ali", "sama"];

const newLenght = friends.push("amir");
console.log(friends);
console.log(newLenght);


friends.unshift('zahra');
console.log(friends);

//Remove elements last
friends.pop();
const dddd = friends.pop();
console.log(dddd);
console.log(friends);

//first

friends.shift();
console.log(friends);

console.log(friends.indexOf('ali'));
console.log(friends.includes('shiva'));


friends.push(10);
console.log(friends.includes(10));


if(friends.includes("sadi")){
    console.log('you have a friend called zahra');
}
else console.log('Not friends')