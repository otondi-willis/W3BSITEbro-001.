const fruits = [{name: "apple", color: "orange", calories: 95},
                {name: "lemon", color: "green", calories: 90},
                {name: "orange", color: "yellow", calories: 70},
                {name: "pineapple", color: "yellowGreen", calories: 60}];

fruits.push({name: "mango", color: "red", calories:30});

fruits.forEach(fruit => console.log(fruit)); //for each

// map()
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);