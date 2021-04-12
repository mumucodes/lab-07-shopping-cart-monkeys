import { addItemToCart } from './local-storage-utils.js';

export function findById(someArray, someId) {
    for (let item of someArray) {
        if (item.id === someId) {
            return item;
        }
    }
    return null;
}


export function monkeyMaker(monkeys) {
    const li = document.createElement('li');
    
    li.classList.add('monkeys');
    
    const pName = document.createElement('p');
    
    pName.classList.add('name');
    pName.textContent = monkeys.name;
    
    const img = document.createElement('img');
    
    img.classList.add('img');
    img.src = '../../assets/' + monkeys.image;
    
    const pSize = document.createElement('p');
    
    pSize.classList.add('size');
    pSize.textContent = monkeys.size;
    
    const pCategory = document.createElement('p');
    
    pCategory.classList.add('category');
    pCategory.textContent = monkeys.category;
    
    const superPower = document.createElement('p');
    
    superPower.classList.add('superPower');
    superPower.textContent = monkeys.superPower;
    
    const price = document.createElement('p');
    
    price.textContent = monkeys.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',

    });
    const button = document.createElement('button');
    
    button.textContent = `add to cart`;
    
    button.addEventListener('click', () => {
        addItemToCart(monkeys.id);
    });
    
    li.append(pName, img, pSize, pCategory, superPower, price, button);

    return li;
}


export function createRowCart(someCartItem, someMonkey) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = someMonkey.name;
    tdQuantity.textContent = someCartItem.quantity;
    const total = someMonkey.price * someCartItem.quantity;

    const config = { 
        currency: 'USD',
        style: 'currency'
    };

    const totalAsUSD = total.toLocaleString('en-US', config);

    tdPrice.textContent = totalAsUSD;
    
    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}

export function createTotalPrice(cartArray, monkeyArray) {
    let sum = 0;
    for (let cartItem of cartArray) {
        const matchingMonkey = findById(monkeyArray, cartItem.id);
        const lineItem = matchingMonkey.price * cartItem.quantity;
        sum = lineItem + sum;
    }
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.textContent = `$${sum}.00`;

    tr.append(td1, td2, td3);

    return tr
}


