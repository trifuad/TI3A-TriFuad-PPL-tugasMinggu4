import {
  incrementQty,
  decrementQty,
  recalculateSubtotal
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subTotal = document.querySelector('#subtotal');
const code = document.querySelector('#code');
const confirmCodeButton = document.querySelector('#confirmCode');
let discount = 0;

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ${recalculateSubtotal(
    price.value, 
    qty.value,
    discount
    )}`;
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ${recalculateSubtotal(
    price.value, 
    qty.value,
    discount
    )}`;
});

confirmCodeButton.addEventListener("click", () => {
  if (code.value === "KODE25") {
    discount = 25;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else if (code.value === "KODE50") {
    discount = 50;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else if(code.value === "KODE75") {
    discount = 75;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else {
    discount = 0;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  }
});