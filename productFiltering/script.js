const products = [
  // 🍎 Fruits
  { name: "Apple", category: "fruits", icon: "🍎" },
  { name: "Banana", category: "fruits", icon: "🍌" },
  { name: "Orange", category: "fruits", icon: "🍊" },
  { name: "Grapes", category: "fruits", icon: "🍇" },
  { name: "Strawberry", category: "fruits", icon: "🍓" },
  { name: "Watermelon", category: "fruits", icon: "🍉" },
  { name: "Pineapple", category: "fruits", icon: "🍍" },
  { name: "Mango", category: "fruits", icon: "🥭" },
  { name: "Peach", category: "fruits", icon: "🍑" },
  { name: "Cherry", category: "fruits", icon: "🍒" },
  { name: "Blueberry", category: "fruits", icon: "🫐" },
  { name: "Kiwi", category: "fruits", icon: "🥝" },
  { name: "Pear", category: "fruits", icon: "🍐" },
  { name: "Avocado", category: "fruits", icon: "🥑" },
  { name: "Papaya", category: "fruits", icon: "🍈" },
  { name: "Guava", category: "fruits", icon: "🍏" },
  { name: "Fig", category: "fruits", icon: "🍈" },
  { name: "Pomegranate", category: "fruits", icon: "🍎" },
  { name: "Lychee", category: "fruits", icon: "🍒" },
  { name: "Plum", category: "fruits", icon: "🍑" },
  { name: "Apricot", category: "fruits", icon: "🍑" },
  { name: "Dragon Fruit", category: "fruits", icon: "🐉" },

  // 🥕 Vegetables
  { name: "Carrot", category: "vegetables", icon: "🥕" },
  { name: "Broccoli", category: "vegetables", icon: "🥦" },
  { name: "Tomato", category: "vegetables", icon: "🍅" },
  { name: "Corn", category: "vegetables", icon: "🌽" },
  { name: "Eggplant", category: "vegetables", icon: "🍆" },
  { name: "Pepper", category: "vegetables", icon: "🌶️" },
  { name: "Cucumber", category: "vegetables", icon: "🥒" },
  { name: "Lettuce", category: "vegetables", icon: "🥬" },
  { name: "Onion", category: "vegetables", icon: "🧅" },
  { name: "Potato", category: "vegetables", icon: "🥔" },
  { name: "Garlic", category: "vegetables", icon: "🧄" },
  { name: "Mushroom", category: "vegetables", icon: "🍄" },
  { name: "Spinach", category: "vegetables", icon: "🥬" },
  { name: "Cauliflower", category: "vegetables", icon: "🥦" },
  { name: "Zucchini", category: "vegetables", icon: "🥒" },
  { name: "Pumpkin", category: "vegetables", icon: "🎃" },
  { name: "Radish", category: "vegetables", icon: "🥕" },
  { name: "Beetroot", category: "vegetables", icon: "🟥" },
  { name: "Capsicum", category: "vegetables", icon: "🫑" },
  { name: "Okra", category: "vegetables", icon: "🌿" },

  // ☕ Beverages
  { name: "Coffee", category: "beverages", icon: "☕" },
  { name: "Tea", category: "beverages", icon: "🍵" },
  { name: "Juice", category: "beverages", icon: "🧃" },
  { name: "Milk", category: "beverages", icon: "🥛" },
  { name: "Smoothie", category: "beverages", icon: "🥤" },
  { name: "Bubble Tea", category: "beverages", icon: "🧋" },
  { name: "Cocktail", category: "beverages", icon: "🍹" },
  { name: "Wine", category: "beverages", icon: "🍷" },
  { name: "Beer", category: "beverages", icon: "🍺" },
  { name: "Champagne", category: "beverages", icon: "🍾" },
  { name: "Energy Drink", category: "beverages", icon: "⚡" },
  { name: "Iced Coffee", category: "beverages", icon: "🧊" },
  { name: "Cold Coffee", category: "beverages", icon: "🧊" },
  { name: "Green Tea", category: "beverages", icon: "🍵" },
  { name: "Lemonade", category: "beverages", icon: "🍋" },
  { name: "Soda", category: "beverages", icon: "🥤" },
  { name: "Mocktail", category: "beverages", icon: "🍹" },
  { name: "Milkshake", category: "beverages", icon: "🥛" },
  { name: "Herbal Tea", category: "beverages", icon: "🌿" },
  { name: "Hot Chocolate", category: "beverages", icon: "🍫" },

  // 🍰 Desserts
  { name: "Cake", category: "desserts", icon: "🍰" },
  { name: "Cupcake", category: "desserts", icon: "🧁" },
  { name: "Donut", category: "desserts", icon: "🍩" },
  { name: "Ice Cream", category: "desserts", icon: "🍨" },
  { name: "Chocolate", category: "desserts", icon: "🍫" },
  { name: "Cookie", category: "desserts", icon: "🍪" },
  { name: "Pie", category: "desserts", icon: "🥧" },
  { name: "Pudding", category: "desserts", icon: "🍮" },
  { name: "Lollipop", category: "desserts", icon: "🍭" },
  { name: "Candy", category: "desserts", icon: "🍬" },
  { name: "Brownie", category: "desserts", icon: "🟫" },
  { name: "Cheesecake", category: "desserts", icon: "🍰" },
  { name: "Muffin", category: "desserts", icon: "🧁" },
  { name: "Macaron", category: "desserts", icon: "🍥" },
  { name: "Tiramisu", category: "desserts", icon: "🍮" },
  { name: "Waffle", category: "desserts", icon: "🧇" },
  { name: "Pancake", category: "desserts", icon: "🥞" },
  { name: "Custard", category: "desserts", icon: "🍮" },
  { name: "Milk Cake", category: "desserts", icon: "🍰" },

  // 🍿 Snacks
  { name: "Popcorn", category: "snacks", icon: "🍿" },
  { name: "Pizza", category: "snacks", icon: "🍕" },
  { name: "Hot Dog", category: "snacks", icon: "🌭" },
  { name: "Taco", category: "snacks", icon: "🌮" },
  { name: "Burrito", category: "snacks", icon: "🌯" },
  { name: "Sandwich", category: "snacks", icon: "🥪" },
  { name: "Chips", category: "snacks", icon: "🥔" },
  { name: "Crackers", category: "snacks", icon: "🧈" },
  { name: "Pretzel", category: "snacks", icon: "🥨" },
  { name: "Nuts", category: "snacks", icon: "🥜" },
  { name: "Nachos", category: "snacks", icon: "🧀" },
  { name: "French Fries", category: "snacks", icon: "🍟" },
  { name: "Samosa", category: "snacks", icon: "🥟" },
  { name: "Spring Roll", category: "snacks", icon: "🥠" },
  { name: "Burger", category: "snacks", icon: "🍔" },
  { name: "Paneer Tikka", category: "snacks", icon: "🧀" },
  { name: "Veg Puff", category: "snacks", icon: "🥐" },
  { name: "Kachori", category: "snacks", icon: "🥟" },
  { name: "Pakora", category: "snacks", icon: "🍤" },
];

const cardsGrid = document.querySelector("#cardsGrid");
const filterTabs = document.querySelector("#filterTabs");
const searchInput = document.querySelector("#searchInput");
const resultsInfo = document.querySelector("#resultsInfo");

const categories = [
  "All",
  "Fruits",
  "Vegetables",
  "Desserts",
  "Beverages",
  "Snacks",
];
let activeCategory = "all";

function renderCards() {
  cardsGrid.innerHTML = "";
  const searchText = searchInput.value.toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || activeCategory === product.category;

    const matchesSearch = product.name.toLowerCase().includes(searchText);

    return matchesSearch && matchesCategory;
  });

  !filteredProducts.length
    ? (cardsGrid.innerHTML = '<p class="empty">No products found.</p>')
    : filteredProducts.forEach((product) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
        <div class="card-icon">${product.icon}</div>
        <div class="card-name">${product.name}</div>
        <div class="card-category">${product.category}</div>
    `;
        cardsGrid.append(card);
      });

  resultsInfo.textContent = `Showing ${filteredProducts.length} of ${products.length} products`;
}

function renderCategories() {
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "tab";
    button.setAttribute("data-category", category.toLowerCase());
    button.textContent = category;

    if (button.dataset.category === "all") {
      button.classList.add("active");
    }

    filterTabs.append(button);
  });

  filterTabs.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab")) {
      activeCategory = e.target.dataset.category;

      document
        .querySelectorAll(".tab")
        .forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      renderCards();
    }
  });
}

searchInput.addEventListener("input", renderCards);

renderCategories();
renderCards();
