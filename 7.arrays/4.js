let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = myArray.map(val => {
  if(val%2) return 'odd';
  else return 'even';
});


console.log(newArray);