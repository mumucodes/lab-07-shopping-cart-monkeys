console.log('i am here');

import { monkeys } from;
import { monkeyMaker } from '../../utils.js';

const ul = document.querySelector('.monkeyProfile');

console.log(ul);

for (let item of monkeys) {
    const newLi = monkeyMaker(item);

    ul.append(newLi);

}