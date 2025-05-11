// Авторизация
if (localStorage.getItem("adminAuth") !== "true") {
    document.querySelector("main").style.display = "none";
    document.querySelector(".auth-block").style.display = "block";
  } else {
    document.querySelector(".auth-block")?.remove();
  }
  
  document.getElementById("authForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (login === "admin" && password === "admin") {
      localStorage.setItem("adminAuth", "true");
      location.reload();
    } else {
      alert("Неверный логин или пароль");
    }
  });
  

document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.getElementById("adminTable");
    let products = JSON.parse(localStorage.getItem("products") || "[]");
  
    function renderTable() {
      tbody.innerHTML = "";
      products.forEach(p => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${p.id}</td>
          <td>${p.name}</td>
          <td>${p.category}</td>
          <td>
            <a href="edit-product.html?id=${p.id}">Изменить</a>
            <button onclick="deleteProduct(${p.id})">Удалить</button>
          </td>

        `;
        tbody.appendChild(tr);
      });
    }
  
    window.deleteProduct = function (id) {
      if (confirm("Удалить товар?")) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem("products", JSON.stringify(products));
        renderTable();
      }
    };
  
    window.editProduct = function (id) {
        const product = products.find(p => p.id === id);
      
        const newName = prompt("Новое название:", product.name);
        if (newName === null) return;
      
        const newShort = prompt("Новое краткое описание:", product.shortDesc);
        if (newShort === null) return;
      
        const newLong = prompt("Новое полное описание:", product.longDesc);
        if (newLong === null) return;
      
        product.name = newName.trim();
        product.shortDesc = newShort.trim();
        product.longDesc = newLong.trim();
      
        localStorage.setItem("products", JSON.stringify(products));
        renderTable();
      };    
  
    renderTable();
  });
  