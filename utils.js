import { monkeys } from "./products/products";

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
    price.classList.add('price');
    price.textContent = `$${monkeys.price}.00`;

    const button = document.createElement('button');
    // button.classList.add();
    button.textContent = `add to cart`;
    console.log(button);

    li.append(pName, img, pSize, pCategory, superPower, price);
    return li;
}

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function totalPrice(price, quantity) {
    return price * quantity;
}

export function createRowCart(cartItem, monkey) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = monkey.name;
    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = cartItem.quantity;
    const tdPrice = document.createElement('td');
    tdPrice.textContent = monkey.price;
    tr.append(tdName, tdPrice, tdQuantity);

    return tr;
}

export function createTotalPrice(cartArray, monkeyArray) {
    let sum = 0;
    for (let cartItem of cartArray) {
        const matchingMonkey = findById(monkeyArray, cartItem.id);
        const lineItem = matchingMonkey.price * cartItem.quantity;
        sum = lineItem + sum;
    }
    return sum;
}

