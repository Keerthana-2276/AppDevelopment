document.addEventListener("DOMContentLoaded", function () {

  console.log("BloomSphere Loaded");

  /* SERVICE WORKER */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('Service Worker registered:', reg.scope))
      .catch(err => console.error('Service Worker failed:', err));
  }

  /* HERO BUTTONS */
  document.getElementById("exploreBtn").onclick = function () {
    document.querySelector(".flowers").scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("sellerBtn").onclick = function () {
    alert("Seller registration coming soon 🌸");
  };

  /* ================= CART SYSTEM ================= */

  let cart = [];

  // Add to Cart
  document.querySelectorAll(".add-to-cart").forEach(function (btn) {
    btn.onclick = function () {

      const card = btn.closest(".card");
      const name = card.querySelector("h3").innerText;
      const price = card.querySelector(".price span").innerText;

      cart.push({ name, price });

      alert(name + " added to cart 🛒");
    };
  });

  // View Cart
  document.getElementById("viewCartBtn").onclick = function () {

    if (cart.length === 0) {
      alert("Your cart is empty 🛒");
      return;
    }

    let message = "🛒 Your Cart:\n\n";
    let total = 0;

    cart.forEach(function (item, index) {
      message += (index + 1) + ". " + item.name + " - " + item.price + "\n";
      total += parseInt(item.price.replace("₹", ""));
    });

    message += "\nTotal: ₹" + total;

    alert(message);
  };

});
