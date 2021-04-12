//keys are critical set your key as the magicString
const CART = 'CART';

export function sendToLocalStorage(array) {
    //function will take in user choices
    const stringCartArray = JSON.stringify(array);

    localStorage.setItem(CART, stringCartArray);
}

export function getFromLocalStorage() {
    const stringyCart = localStorage.getItem(CART);
    const parseCartArray = JSON.parse(stringyCart);
    
    return parseCartArray;

}