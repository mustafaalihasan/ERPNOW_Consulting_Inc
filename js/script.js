const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 60)
});

const assetMaintenanceBtn = document.querySelector(".asset-maintenance-button");

console.log(assetMaintenanceBtn);
assetMaintenanceBtn.addEventListener("mouseover", function() {
    assetMaintenanceBtn.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
  });
  

