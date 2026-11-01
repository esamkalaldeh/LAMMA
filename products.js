// Products Data Array - 50 Clothing Items
const products = [
  // T-Shirts Category (10 items)
  {
    id: 1,
    name: "Classic White T-Shirt",
    category: "T-Shirts",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    stock: 25
  },
  {
    id: 2,
    name: "Black V-Neck Tee",
    category: "T-Shirts",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
    stock: 30
  },
  {
    id: 3,
    name: "Striped Cotton T-Shirt",
    category: "T-Shirts",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500",
    stock: 15
  },
  {
    id: 4,
    name: "Graphic Print Tee",
    category: "T-Shirts",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
    stock: 20
  },
  {
    id: 5,
    name: "Navy Blue Polo T-Shirt",
    category: "T-Shirts",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500",
    stock: 12
  },
  {
    id: 6,
    name: "Pastel Pink T-Shirt",
    category: "T-Shirts",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
    stock: 18
  },
  {
    id: 7,
    name: "Vintage Logo Tee",
    category: "T-Shirts",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500",
    stock: 10
  },
  {
    id: 8,
    name: "Grey Heather T-Shirt",
    category: "T-Shirts",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=500",
    stock: 22
  },
  {
    id: 9,
    name: "Pocket T-Shirt Green",
    category: "T-Shirts",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500",
    stock: 14
  },
  {
    id: 10,
    name: "Long Sleeve Basic Tee",
    category: "T-Shirts",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=500",
    stock: 16
  },

  // Shirts Category (10 items)
  {
    id: 11,
    name: "Oxford Button-Down Shirt",
    category: "Shirts",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
    stock: 20
  },
  {
    id: 12,
    name: "Denim Casual Shirt",
    category: "Shirts",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1598032895397-b9c37e8b6f3c?w=500",
    stock: 18
  },
  {
    id: 13,
    name: "Flannel Checkered Shirt",
    category: "Shirts",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
    stock: 15
  },
  {
    id: 14,
    name: "White Linen Shirt",
    category: "Shirts",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500",
    stock: 12
  },
  {
    id: 15,
    name: "Corduroy Brown Shirt",
    category: "Shirts",
    price: 52.99,
    image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=500",
    stock: 10
  },
  {
    id: 16,
    name: "Hawaiian Print Shirt",
    category: "Shirts",
    price: 36.99,
    image: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=500",
    stock: 25
  },
  {
    id: 17,
    name: "Black Dress Shirt",
    category: "Shirts",
    price: 55.99,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500",
    stock: 14
  },
  {
    id: 18,
    name: "Chambray Work Shirt",
    category: "Shirts",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=500",
    stock: 16
  },
  {
    id: 19,
    name: "Striped Business Shirt",
    category: "Shirts",
    price: 48.99,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
    stock: 11
  },
  {
    id: 20,
    name: "Military Green Shirt",
    category: "Shirts",
    price: 41.99,
    image: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=500",
    stock: 13
  },

  // Pants Category (10 items)
  {
    id: 21,
    name: "Classic Blue Jeans",
    category: "Pants",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    stock: 30
  },
  {
    id: 22,
    name: "Black Skinny Jeans",
    category: "Pants",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500",
    stock: 22
  },
  {
    id: 23,
    name: "Khaki Chinos",
    category: "Pants",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
    stock: 18
  },
  {
    id: 24,
    name: "Cargo Pants Olive",
    category: "Pants",
    price: 62.99,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500",
    stock: 15
  },
  {
    id: 25,
    name: "Grey Dress Pants",
    category: "Pants",
    price: 68.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
    stock: 12
  },
  {
    id: 26,
    name: "Ripped Denim Jeans",
    category: "Pants",
    price: 56.99,
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=500",
    stock: 20
  },
  {
    id: 27,
    name: "Corduroy Pants Brown",
    category: "Pants",
    price: 58.99,
    image: "https://images.unsplash.com/photo-1624378440070-7b44c5f4f6a7?w=500",
    stock: 14
  },
  {
    id: 28,
    name: "Jogger Sweatpants",
    category: "Pants",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    stock: 25
  },
  {
    id: 29,
    name: "White Linen Pants",
    category: "Pants",
    price: 52.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
    stock: 10
  },
  {
    id: 30,
    name: "Plaid Trousers",
    category: "Pants",
    price: 66.99,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
    stock: 16
  },

  // Jackets Category (10 items)
  {
    id: 31,
    name: "Leather Biker Jacket",
    category: "Jackets",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    stock: 8
  },
  {
    id: 32,
    name: "Denim Trucker Jacket",
    category: "Jackets",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500",
    stock: 12
  },
  {
    id: 33,
    name: "Bomber Jacket Black",
    category: "Jackets",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
    stock: 10
  },
  {
    id: 34,
    name: "Puffer Winter Jacket",
    category: "Jackets",
    price: 134.99,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500",
    stock: 15
  },
  {
    id: 35,
    name: "Windbreaker Navy",
    category: "Jackets",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
    stock: 18
  },
  {
    id: 36,
    name: "Wool Peacoat",
    category: "Jackets",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=500",
    stock: 7
  },
  {
    id: 37,
    name: "Rain Jacket Yellow",
    category: "Jackets",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
    stock: 20
  },
  {
    id: 38,
    name: "Varsity Jacket",
    category: "Jackets",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1520367691844-d2d7d53f0f28?w=500",
    stock: 11
  },
  {
    id: 39,
    name: "Suede Jacket Brown",
    category: "Jackets",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500",
    stock: 6
  },
  {
    id: 40,
    name: "Track Jacket Green",
    category: "Jackets",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
    stock: 14
  },

  // Shoes Category (5 items)
  {
    id: 41,
    name: "White Sneakers",
    category: "Shoes",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    stock: 25
  },
  {
    id: 42,
    name: "Black Leather Boots",
    category: "Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500",
    stock: 12
  },
  {
    id: 43,
    name: "Canvas Slip-Ons",
    category: "Shoes",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
    stock: 20
  },
  {
    id: 44,
    name: "Running Shoes Blue",
    category: "Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    stock: 18
  },
  {
    id: 45,
    name: "Brown Oxford Shoes",
    category: "Shoes",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500",
    stock: 10
  },

  // Accessories Category (5 items)
  {
    id: 46,
    name: "Leather Belt Black",
    category: "Accessories",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583c2?w=500",
    stock: 30
  },
  {
    id: 47,
    name: "Canvas Backpack",
    category: "Accessories",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    stock: 15
  },
  {
    id: 48,
    name: "Baseball Cap Navy",
    category: "Accessories",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500",
    stock: 40
  },
  {
    id: 49,
    name: "Wool Beanie Grey",
    category: "Accessories",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500",
    stock: 35
  },
  {
    id: 50,
    name: "Sunglasses Black",
    category: "Accessories",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    stock: 22
  }
];
