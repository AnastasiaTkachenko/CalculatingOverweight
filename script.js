const weight = prompt('What is your weight?'); 
const height = prompt('What is your height?'); 
const bodyMassIndex = weight / Math.pow(height,2); /* математическая конструкция где мы делим вес на рост в квадрате отсюда 2 после запятой - это квадрат */ 

const areYouOverweight = bodyMassIndex >=25; 

console.log (bodyMassIndex);
console.log (areYouOverweight);

alert ('Are you overweight?' + areYouOverweight); 

console.log("test");


+