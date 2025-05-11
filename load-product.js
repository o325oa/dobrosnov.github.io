function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const id = parseInt(getParam("id"));
    const container = document.getElementById("productContainer");
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const product = products.find(p => p.id === id);
  
    if (!product) {
      container.innerHTML = "<p>Товар не найден.</p>";
      return;
    }
  
    container.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="product-info">
        <h1>${product.name}</h1>
        <p class="subtitle">${product.shortDesc}</p>
        <p class="description">${product.longDesc}</p>
        <ul class="features">
          ${product.features.map(f => `<li>${f}</li>`).join("")}
        </ul>
        <a href="#contacts" class="btn">Узнать о наличии</a>
      </div>
    `;
  });
  