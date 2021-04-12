
import { getCart } from '../local-storage-utils.js';
import { monkeys } from '../products/products.js';
// import cart from './cart-data.js';
import { createRowCart, createTotalPrice, findById } from '../utils.js';

const button = document.querySelector('button');
const table = document.querySelector('.checkoutTable');
const cart = getCart();

for (let cartItem of cart) {

    const matchingMonkey = findById(monkeys, cartItem.id);
    const tr = createRowCart(cartItem, matchingMonkey);

    table.append(tr);
}

const totalPrice = createTotalPrice(cart, monkeys);

table.append(totalPrice);

button.addEventListener('click', () => {
    const cart = getCart();
    alert(JSON.stringify(cart));
    localStorage.clear();
    window.location = '/';
});