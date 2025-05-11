document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const data = {
      name: this.name.value,
      category: this.category.value,
      shortDesc: this.shortDesc.value,
      longDesc: this.longDesc.value,
      features: this.features.value.split(',').map(f => f.trim()),
      image: this.image.value,
    };
  
    // let products = JSON.parse(localStorage.getItem('products') || '[]');
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    data.id = newId;
    products.push(data);
    localStorage.setItem('products', JSON.stringify(products, null, 2));

    document.getElementById('outputJson').textContent = JSON.stringify(data, null, 2);
    this.reset();
  });
  