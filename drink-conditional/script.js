 const age = 23;

 const drink = age >= 18 ? 'win' : 'water';
 console.log(drink);

 let drink2;
 if (age >= 18){
    drink2 = 'win'
 } else{
    drink2 = 'water'
 }
 console.log(drink2);
 
 console.log(`i like to drink ${age >= 18 ? 'win' : 'water'}`);