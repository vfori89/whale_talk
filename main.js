//WHALE TALK
//create input string
let input = 'turpentine and turtles';
//create vowels arrey to compare all letters of input to
const vowels = ['a', 'e', 'i', 'o', 'u'];
//create arrey to store the results
let resultArrey = [];
//loop to itterate through the input arrey 
for (let i = 0; i < input.length; i++){
  let o = input[i];
  //statement that pushes letters e and u in the input arrey to the result arrey
  if (o === 'e' || o === 'u') {
    resultArrey.push(o)
  }
  //loop that compares and pushes letters in input arrey with letters in vowels arrey to the result Arrey
  for (let j = 0; j < vowels.length; j++){
    let u = vowels[j];
    if (o == u) {
      resultArrey.push(o);
    }
    
  }
}
//outputs the results
console.log(resultArrey.join().toUpperCase())
