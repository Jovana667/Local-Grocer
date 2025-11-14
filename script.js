// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    emoji: "🎧",
    description: "High-quality wireless headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    emoji: "⌚",
    description: "Fitness tracking smart watch",
  },
];

// App state
let cart = [];
let currentUser = null;
let allProducts = [...products];

// DOM Elements - will be initialized after DOM loads
let authSection; shopSection, loginBtn, emailInput, passwordInput, authMessage;
