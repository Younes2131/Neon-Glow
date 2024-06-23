// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  const product = event.target.parentElement;
  const productName = product.querySelector('h3').textContent;
  const productPrice = product.querySelector('p').textContent;

  // Here, you can add the logic to add the product to the cart
  // For example, you can store the cart items in the browser's localStorage
  console.log(`Added ${productName} (${productPrice}) to the cart.`);
}