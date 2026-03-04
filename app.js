document.addEventListener("DOMContentLoaded", function () {

  console.log("BloomSphere Loaded");

  /* ================= SERVICE WORKER ================= */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('Service Worker registered'))
      .catch(err => console.log('Service Worker failed'));
  }

  /* ================= HERO BUTTONS ================= */
  document.getElementById("exploreBtn").onclick = function () {
    document.querySelector(".flowers").scrollIntoView({ behavior: "smooth" });
  };

  document.getElementById("sellerBtn").onclick = function () {
    alert("Seller registration coming soon 🌸");
  };

  /* ================= CART SYSTEM ================= */

  let cart = [];
  let total = 0;

  const cartDisplay = document.getElementById("cartDisplay");

  document.querySelectorAll(".add-to-cart").forEach(function (btn) {

    btn.onclick = function () {

      const card = btn.closest(".card");
      const name = card.querySelector("h3").innerText;
      const priceText = card.querySelector(".price span").innerText;

      const price = parseInt(priceText.replace("₹", ""));

      cart.push({ name: name, price: price });
      total += price;

      cartDisplay.innerText =
        "🛒 Cart: " + cart.length + " items | Total: ₹" + total;

      alert(
        "🛒 Added to Cart!\n\n" +
        "Flower: " + name + "\n" +
        "Price: ₹" + price
      );
    };
  });

});
