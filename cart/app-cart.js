
import { monkeys } from '../products/products.js';
import { cart } from './cart-data.js';
import { createRowCart, createTotalPrice, findById } from '../utils.js';

const table = document.querySelector('.checkoutTable');

for (let cartItem of cart) {
    const matchingMonkey = findById(monkeys, cartItem.id);
    const tr = createRowCart(cartItem, matchingMonkey);

    table.append(tr);
}
const totalPrice = createTotalPrice(cart, monkeys);

table.append(totalPrice);