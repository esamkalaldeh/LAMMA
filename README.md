# Fashion Store - Clothing Ecommerce Website

A fully functional clothing ecommerce website built with HTML, CSS, and JavaScript. This project features a modern, responsive design with a complete shopping experience including product browsing, search, category filtering, and shopping cart functionality.

## 🌟 Features

### Product Catalog
- **50 Products** across 6 categories (T-Shirts, Shirts, Pants, Jackets, Shoes, Accessories)
- Each product includes:
  - Product name
  - Category
  - Price
  - Stock availability
  - High-quality product image from Unsplash

### Navigation & Filtering
- **Category Pages**: Dedicated pages for each category (T-Shirts, Shirts, Pants, Jackets, Shoes, Accessories)
- **Search Functionality**: Real-time search by product name or category
- **Responsive Navigation**: Easy-to-use navigation bar with category links

### Product Display
- **Product Cards**: Beautiful card layout with hover effects
- **Product Modal**: Click on any product to view detailed information in a modal popup
- **Stock Status**: Clear indication of stock availability and quantity

### Shopping Cart
- **Add to Cart**: Add products from product cards or modal
- **Cart Sidebar**: Slide-out cart with full functionality
- **Quantity Management**: Increase/decrease product quantities
- **Remove Items**: Remove individual items from cart
- **Cart Persistence**: Cart data saved in localStorage
- **Total Calculation**: Automatic cart total calculation
- **Checkout**: Checkout functionality with order summary

### User Experience
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Dark theme with vibrant accent colors
- **Smooth Animations**: Hover effects, transitions, and notifications
- **Toast Notifications**: Visual feedback when adding items to cart
- **Stock Validation**: Prevents adding more items than available stock

## 📁 Project Structure

```
clothing-store/
├── index.html              # Main homepage (All products)
├── tshirts.html           # T-Shirts category page
├── shirts.html            # Shirts category page
├── pants.html             # Pants category page
├── jackets.html           # Jackets category page
├── shoes.html             # Shoes category page
├── accessories.html       # Accessories category page
├── styles.css             # Complete stylesheet
├── products.js            # Product data array (50 products)
├── script.js              # Main JavaScript functionality
└── README.md              # This file
```

## 🚀 Getting Started

### Option 1: Open Directly in Browser
1. Download all project files
2. Open `index.html` in any modern web browser
3. Start shopping!

### Option 2: Use a Local Server
1. Download all project files to a folder
2. Open terminal/command prompt in the project folder
3. Run a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server -p 8000
   ```
4. Open browser and navigate to `http://localhost:8000`

## 🎨 Design Features

### Color Scheme
- **Background**: Dark navy (#1a1f2e)
- **Cards**: Slate blue (#252d3f)
- **Primary Accent**: Cyan blue (#4fc3f7)
- **Secondary Accent**: Yellow (#ffd54f)
- **Success**: Green (#4caf50)
- **Error**: Red (#ff5252)

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Responsive font sizes
- Clear hierarchy

### Layout
- Maximum content width: 1400px
- Responsive grid system
- Flexible navigation
- Sticky header

## 💻 Technical Details

### HTML Structure
- Semantic HTML5 elements
- Accessible markup
- SEO-friendly structure
- Modal and sidebar components

### CSS Features
- Flexbox and Grid layouts
- CSS transitions and animations
- Media queries for responsiveness
- Custom properties for theming
- Hover effects and interactions

### JavaScript Functionality
- **Product Display**: Dynamic product rendering
- **Search**: Real-time product filtering
- **Category Filtering**: Filter products by category
- **Cart Management**: Add, remove, update quantities
- **LocalStorage**: Persistent cart data
- **Modal System**: Product detail popups
- **Event Handling**: Comprehensive event listeners
- **Stock Validation**: Prevent over-ordering

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🛍️ Product Categories

1. **T-Shirts** (10 products) - $15.99 - $29.99
2. **Shirts** (10 products) - $36.99 - $55.99
3. **Pants** (10 products) - $45.99 - $68.99
4. **Jackets** (10 products) - $69.99 - $169.99
5. **Shoes** (5 products) - $49.99 - $129.99
6. **Accessories** (5 products) - $19.99 - $54.99

## 🔧 Customization

### Adding New Products
Edit `products.js` and add new product objects:
```javascript
{
  id: 51,
  name: "Product Name",
  category: "Category",
  price: 29.99,
  image: "https://image-url.com/image.jpg",
  stock: 15
}
```

### Changing Colors
Edit the color values in `styles.css`:
- Background colors
- Accent colors
- Button colors
- Text colors

### Modifying Layout
Adjust the CSS Grid properties in `styles.css`:
```css
.products-grid {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}
```

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📝 Features Demonstration

### Search Functionality
- Type in the search box to filter products by name or category
- Results update in real-time
- Clear search to show all products

### Category Navigation
- Click category links in the header
- Each category has its own dedicated page
- Active category is highlighted

### Product Modal
- Click on any product card
- View larger image and full details
- Add to cart directly from modal
- Close modal with X button or click outside

### Shopping Cart
- Click cart button to open sidebar
- View all added items
- Adjust quantities with +/- buttons
- Remove items individually
- See real-time total calculation
- Proceed to checkout

## 🎯 Future Enhancements

Potential features for future versions:
- User authentication
- Product reviews and ratings
- Wishlist functionality
- Product comparison
- Advanced filtering (price range, size, color)
- Payment gateway integration
- Order history
- Admin panel for product management

## 📄 License

This project is free to use for educational and personal purposes.

## 👨‍💻 Author

Created as a demonstration of modern web development practices using vanilla HTML, CSS, and JavaScript.

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Inspired by modern ecommerce platforms
- Built with attention to user experience and accessibility

---

**Enjoy shopping at Fashion Store!** 🛍️
