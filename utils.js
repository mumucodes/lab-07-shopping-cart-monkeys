export function monkeyMaker(monkeys) {
    const li = document.createElement('li');
    li.classList.add('monkeys');
    
    const pName = document.createElement('p');
    pName.classList.add('name');
    pName.textContent = monkeys.name;
    
    const img = document.createElement('img');
    img.classList.add('img');
    img.src = '../../assets/'+ monkeys.image;
    
    const pSize = document.createElement('p');
    pSize.classList.add('size');
    pSize.textContent = monkeys.size;
    
    const pCategory = document.createElement('p');
    pCategory.classList.add('category');
    pCategory.textContent = monkeys.category;
    
    const superPower = document.createElement('p');
    superPower.classList.add('superpower');
    superPower.textContent = monkeys.superPower;
    
    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `$${monkeys.price}.00`;

    const button = document.createElement('button');
    button.classList.add()

    li.append(pName, img, pSize, pCategory, superPower, price);
    return li;
};