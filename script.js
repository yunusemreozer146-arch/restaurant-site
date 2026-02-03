const menuCards = document.querySelector(".menu-cards");

const foods = [
  { name: "Pizza", price: "$12" },
  { name: "Burger", price: "$9" },
  { name: "Dessert", price: "$6" }
];

foods.forEach(food => {
  const card = document.createElement("div");
  card.className = "menu-card";

  card.innerHTML = `
    <h3>${food.name}</h3>
    <p class="price">${food.price}</p>
    <button class="order-btn">Order Now</button>
  `;

  menuCards.appendChild(card);
});

function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({
    behavior: "smooth"
  });
}

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

document.querySelectorAll(".menu-card").forEach(card => {
  const title = card.querySelector("h3")?.innerText;

  const images = {
    Pizza: "images/menu.png",
    Burger: "images/burger.png",
    Dessert: "images/baklava.jpg"
  };

  if (images[title]) {
    const img = document.createElement("img");
    img.src = images[title];
    img.alt = title;
    card.prepend(img);
  }
});
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  document.querySelectorAll(".menu-card").forEach(card => {
    const name = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = name.includes(value) ? "block" : "none";
  });
});
