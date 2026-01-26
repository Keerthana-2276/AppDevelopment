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

  /* ORDER BUTTONS */
  document.querySelectorAll(".price button").forEach(function (btn) {
    btn.onclick = function () {
      const card = btn.closest(".card");
      alert(
        "💐 Order Confirmed!\n\n" +
        "Flower: " + card.querySelector("h3").innerText + "\n" +
        "Price: " + card.querySelector(".price span").innerText
      );
    };
  });

});
