document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("productGrid");
    const category = "beds"; // Укажи нужную категорию для страницы
  
    const products = JSON.parse(localStorage.getItem("products") || "[]");
  
    const filtered = products.filter(p => p.category === category);
  
    if (filtered.length === 0) {
      grid.innerHTML = "<p>Нет товаров в этой категории.</p>";
      return;
    }
  
    filtered.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>${product.shortDesc}</p>
        </a>
      `;
      grid.appendChild(card);
    });
  });
  