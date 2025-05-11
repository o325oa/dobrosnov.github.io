function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const id = parseInt(getParam("id"));
    const form = document.getElementById("editForm");
    let products = JSON.parse(localStorage.getItem("products") || "[]");
    const product = products.find(p => p.id === id);
  
    if (!product) {
      alert("Товар не найден");
      window.location.href = "admin.html";
      return;
    }
  
    // Заполняем поля
    form.name.value = product.name;
    form.category.value = product.category;
    form.shortDesc.value = product.shortDesc;
    form.longDesc.value = product.longDesc;
    form.features.value = product.features.join(", ");
    form.image.value = product.image;

    const preview = document.getElementById("previewImage");
    preview.src = product.image;

    form.image.addEventListener("input", () => {
      preview.src = form.image.value;
    });

  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      product.name = form.name.value.trim();
      product.category = form.category.value;
      product.shortDesc = form.shortDesc.value.trim();
      product.longDesc = form.longDesc.value.trim();
      product.features = form.features.value.split(",").map(f => f.trim());
      product.image = form.image.value.trim();
  
      localStorage.setItem("products", JSON.stringify(products));
      alert("Изменения сохранены");
      window.location.href = "admin.html";
    });
  });
  