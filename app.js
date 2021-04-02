// import functions and grab DOM elements
import { //recently created function }
import { monkeys } from './products/products.js'
//grabbing the constant created inside of this path which lists all the current monkeys rendered
import { monkeyMaker } from './utils.js'
const ul = document.getElementById('newMonkey');

for(let item of monkeys) {
    const newLi = monkeyMaker(item);

    ul.append(newLi);
};




// set event listeners to update state and DOM