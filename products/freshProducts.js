import { monkeys } from './products.js';
import { monkeyMaker } from '../utils.js';


const ul = document.querySelector('.monkeyProfile');


for (let item of monkeys) {
    const newLi = monkeyMaker(item);

    ul.append(newLi);

}
