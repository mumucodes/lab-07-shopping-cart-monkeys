console.log('i am here');

import { monkeys } from '../products.js';
import { monkeyMaker } from '../../utils.js';

const ul = document.querySelector('.monkeyProfile');

console.log(ul);

for (let item of monkeys) {
    const newLi = monkeyMaker(item);

    ul.append(newLi);

}