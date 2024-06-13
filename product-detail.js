function img(anything) {
  document.querySelector('.slide').src = anything;
}

function change(change) {
  const line = document.querySelector('.home');
  line.style.background = change;
}

document.getElementById('add-to-cart').addEventListener('click', function () {
  const quantity = document.getElementById('quantity').value;
  const selectedColor = document.querySelector('input[name="color"]:checked');
  const color = selectedColor.getAttribute('data-color');
  const imgSrc = selectedColor.getAttribute('data-img-src'); // Capture the image source
  const product = {
    imgSrc: imgSrc, // Include the imgSrc property
    quantity: quantity,
    color: color,
    price: 299
  };

  let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));

  window.location.href = 'cart.html';
});