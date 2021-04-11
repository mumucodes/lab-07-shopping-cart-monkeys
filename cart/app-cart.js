
import { getCart } from '../local-storage-utils.js';
import { monkeys } from '../products/products.js';
// import { cart } from '../cart/cart-data.js';
import { createRowCart, createTotalPrice, findById } from '../utils.js';

const cart = [
    {
        id: 1,
        quantity: 3
    },
    {
        id: 2,
        quantity: 3
    },
    {
        id: 3,
        quantity: 3
    },
    {
        id: 4,
        quantity: 3
    }];

const button = document.getElementById('submit');
const table = document.querySelector('.checkoutTable');

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
})