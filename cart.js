function updateCart() {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach((item, index) => {
      const itemRow = document.createElement('tr');
      itemRow.innerHTML = `
        <td><img src="${item.imgSrc}" alt="${item.name}" style="width: 100px;"></td>
        <td>${item.color}</td>
        <td><input type="number" value="${item.quantity}" min="0" class="quantity-input" data-index="${index}"></td>
        <td>₹${item.price * item.quantity}</td>
        <td><button class="delete" data-index="${index}">×</button></td>
      `;
      cartItemsContainer.appendChild(itemRow);
      total += item.price * item.quantity;
    });

    document.getElementById('product-count').textContent = `${cart.length} Products`;
    document.getElementById('total-price').textContent = `₹${total}`;
    document.getElementById('grand-total').textContent = `₹${total + 5}`;

    // Update quantity on input change
    document.querySelectorAll('.quantity-input').forEach(input => {
      input.addEventListener('input', validateQuantity);
      input.addEventListener('change', updateQuantity);
    });

    // Remove item on delete button click
    document.querySelectorAll('.delete').forEach(button => {
      button.addEventListener('click', removeItem);
    });
  }

  function validateQuantity(event) {
    const input = event.target;
    const value = parseInt(input.value);

    if (value < 0 || isNaN(value)) {
      input.value = 0;
    }
  }

  function updateQuantity(event) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const index = event.target.dataset.index;
    const newQuantity = parseInt(event.target.value);
    cart[index].quantity = newQuantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
  }

  function removeItem(event) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const index = event.target.dataset.index;
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
  }

  document.addEventListener('DOMContentLoaded', updateCart);