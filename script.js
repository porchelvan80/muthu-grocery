// ===== Product Data =====
const products = {
    vegetables: [
        { id: 1, name: 'Tomatoes', price: 40, unit: '1kg', icon: '🍅', category: 'vegetables' },
        { id: 2, name: 'Onions', price: 30, unit: '1kg', icon: '🧅', category: 'vegetables' },
        { id: 3, name: 'Potatoes', price: 25, unit: '1kg', icon: '🥔', category: 'vegetables' },
        { id: 4, name: 'Carrots', price: 50, unit: '1kg', icon: '🥕', category: 'vegetables' },
        { id: 5, name: 'Capsicum', price: 60, unit: '1kg', icon: '🫑', category: 'vegetables' },
        { id: 6, name: 'Cauliflower', price: 40, unit: '1pc', icon: '🥦', category: 'vegetables' },
        { id: 7, name: 'Cabbage', price: 30, unit: '1pc', icon: '🥬', category: 'vegetables' },
        { id: 8, name: 'Ladies Finger', price: 45, unit: '1kg', icon: '🫛', category: 'vegetables' },
        { id: 9, name: 'Brinjal', price: 35, unit: '1kg', icon: '🍆', category: 'vegetables' },
        { id: 10, name: 'Bottle Gourd', price: 30, unit: '1kg', icon: '🥒', category: 'vegetables' },
        { id: 11, name: 'Cucumber', price: 25, unit: '1kg', icon: '🥒', category: 'vegetables' },
        { id: 12, name: 'Beetroot', price: 40, unit: '1kg', icon: '🫒', category: 'vegetables' },
        { id: 13, name: 'Radish', price: 30, unit: '1kg', icon: '🫒', category: 'vegetables' },
        { id: 14, name: 'Green Beans', price: 55, unit: '1kg', icon: '🫛', category: 'vegetables' },
        { id: 15, name: 'Coriander Leaves', price: 20, unit: '100g', icon: '🌿', category: 'vegetables' },
        { id: 16, name: 'Mint Leaves', price: 25, unit: '100g', icon: '🌿', category: 'vegetables' },
        { id: 17, name: 'Ginger', price: 200, unit: '1kg', icon: '🫚', category: 'vegetables' },
        { id: 18, name: 'Garlic', price: 250, unit: '1kg', icon: '🧄', category: 'vegetables' },
        { id: 19, name: 'Green Chillies', price: 60, unit: '1kg', icon: '🌶️', category: 'vegetables' },
        { id: 20, name: 'Lemon', price: 80, unit: '1kg', icon: '🍋', category: 'vegetables' }
    ],
    maligai: [
        { id: 101, name: 'Rice (Basmati)', price: 120, unit: '1kg', icon: '🌾', category: 'maligai' },
        { id: 102, name: 'Rice (Raw)', price: 50, unit: '1kg', icon: '🌾', category: 'maligai' },
        { id: 103, name: 'Wheat Flour', price: 40, unit: '1kg', icon: '🌾', category: 'maligai' },
        { id: 104, name: 'Sugar', price: 45, unit: '1kg', icon: '🍬', category: 'maligai' },
        { id: 105, name: 'Salt', price: 20, unit: '1kg', icon: '🧂', category: 'maligai' },
        { id: 106, name: 'Turmeric Powder', price: 150, unit: '500g', icon: '🫚', category: 'maligai' },
        { id: 107, name: 'Red Chilli Powder', price: 180, unit: '500g', icon: '🌶️', category: 'maligai' },
        { id: 108, name: 'Coriander Powder', price: 160, unit: '500g', icon: '🌿', category: 'maligai' },
        { id: 109, name: 'Cumin Seeds', price: 200, unit: '500g', icon: '🌿', category: 'maligai' },
        { id: 110, name: 'Mustard Seeds', price: 180, unit: '500g', icon: '🌿', category: 'maligai' },
        { id: 111, name: 'Cooking Oil (Sunflower)', price: 120, unit: '1L', icon: '🫒', category: 'maligai' },
        { id: 112, name: 'Cooking Oil (Groundnut)', price: 140, unit: '1L', icon: '🫒', category: 'maligai' },
        { id: 113, name: 'Toor Dal', price: 130, unit: '1kg', icon: '🫘', category: 'maligai' },
        { id: 114, name: 'Moong Dal', price: 140, unit: '1kg', icon: '🫘', category: 'maligai' },
        { id: 115, name: 'Urad Dal', price: 150, unit: '1kg', icon: '🫘', category: 'maligai' },
        { id: 116, name: 'Chana Dal', price: 120, unit: '1kg', icon: '🫘', category: 'maligai' },
        { id: 117, name: 'Milk', price: 60, unit: '1L', icon: '🥛', category: 'maligai' },
        { id: 118, name: 'Curd', price: 50, unit: '500g', icon: '🥛', category: 'maligai' },
        { id: 119, name: 'Eggs', price: 80, unit: '1 Dozen', icon: '🥚', category: 'maligai' },
        { id: 120, name: 'Bread (White)', price: 35, unit: '1 Loaf', icon: '🍞', category: 'maligai' },
        { id: 121, name: 'Bread (Brown)', price: 45, unit: '1 Loaf', icon: '🍞', category: 'maligai' },
        { id: 122, name: 'Biscuits', price: 50, unit: '200g', icon: '🍪', category: 'maligai' },
        { id: 123, name: 'Tea Powder', price: 180, unit: '500g', icon: '🫖', category: 'maligai' },
        { id: 124, name: 'Coffee Powder', price: 250, unit: '200g', icon: '☕', category: 'maligai' },
        { id: 125, name: 'Soap', price: 40, unit: '1pc', icon: '🧼', category: 'maligai' },
        { id: 126, name: 'Shampoo', price: 150, unit: '200ml', icon: '🧴', category: 'maligai' },
        { id: 127, name: 'Toothpaste', price: 80, unit: '1pc', icon: '🪥', category: 'maligai' },
        { id: 128, name: 'Detergent Powder', price: 180, unit: '1kg', icon: '🧼', category: 'maligai' }
    ]
};

// ===== Cart Management =====
let cart = JSON.parse(localStorage.getItem('groceryCart')) || [];

// Default vegetable prices (backup)
const defaultVegetablePrices = [...products.vegetables];

// Load prices from localStorage or use default
function loadVegetablePrices() {
    const today = new Date().toDateString();
    const savedPrices = JSON.parse(localStorage.getItem('vegetablePrices')) || {};
    
    // Check if we have prices for today
    if (savedPrices.date === today && savedPrices.prices) {
        // Update products with saved prices
        savedPrices.prices.forEach(savedPrice => {
            const product = products.vegetables.find(p => p.id === savedPrice.id);
            if (product) {
                product.price = savedPrice.price;
            }
        });
        return savedPrices.lastUpdated;
    }
    
    return null;
}

// Save vegetable prices for today
function saveVegetablePrices() {
    const today = new Date().toDateString();
    const now = new Date().toLocaleString('en-IN');
    
    const pricesToSave = products.vegetables.map(p => ({
        id: p.id,
        name: p.name,
        price: p.price
    }));
    
    const priceData = {
        date: today,
        prices: pricesToSave,
        lastUpdated: now
    };
    
    localStorage.setItem('vegetablePrices', JSON.stringify(priceData));
    return now;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load prices for today
    const lastUpdated = loadVegetablePrices();
    
    // Set current date
    const today = new Date();
    document.getElementById('currentDate').textContent = today.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Set last updated time
    document.getElementById('lastUpdated').textContent = lastUpdated || 'Never';
    
    // Display products
    displayProducts('vegetables', products.vegetables);
    displayProducts('maligai', products.maligai);
    
    // Display price management table
    displayPriceManagementTable();
    
    updateCartBadge();
    updateOrderSummary();
    
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
});

// Display products
function displayProducts(category, productList) {
    const gridId = category === 'vegetables' ? 'vegetablesGrid' : 'maligaiGrid';
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';

    productList.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-4 col-sm-6 col-12';
        
        col.innerHTML = `
            <div class="product-card">
                <div class="product-image">${product.icon}</div>
                <h5 class="product-name">${product.name}</h5>
                <p class="product-category">${product.category === 'vegetables' ? 'Vegetable' : 'Maligai'}</p>
                <div class="product-price">₹${product.price.toFixed(2)}</div>
                <p class="product-unit">Per ${product.unit}</p>
                <button class="btn btn-add-cart" onclick="addToCart(${product.id}, '${product.category}')">
                    <i class="bi bi-cart-plus"></i> Add to Cart
                </button>
            </div>
        `;
        
        grid.appendChild(col);
    });
}

// Filter products
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    
    let filteredVeg = products.vegetables;
    let filteredMaligai = products.maligai;
    
    if (searchTerm) {
        filteredVeg = products.vegetables.filter(p => 
            p.name.toLowerCase().includes(searchTerm)
        );
        filteredMaligai = products.maligai.filter(p => 
            p.name.toLowerCase().includes(searchTerm)
        );
    }
    
    if (categoryFilter === 'vegetables') {
        displayProducts('vegetables', filteredVeg);
        document.getElementById('vegetables-tab').click();
    } else if (categoryFilter === 'maligai') {
        displayProducts('maligai', filteredMaligai);
        document.getElementById('maligai-tab').click();
    } else {
        displayProducts('vegetables', filteredVeg);
        displayProducts('maligai', filteredMaligai);
    }
}

// Add to cart
function addToCart(productId, category) {
    const productList = category === 'vegetables' ? products.vegetables : products.maligai;
    const product = productList.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartBadge();
    updateCartDisplay();
    showNotification(`${product.name} added to cart!`);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartBadge();
    updateCartDisplay();
    updateOrderSummary();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartDisplay();
            updateOrderSummary();
        }
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('groceryCart', JSON.stringify(cart));
}

// Update cart badge
function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cartBadge');
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Toggle cart sidebar
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (sidebar.classList.contains('active')) {
        updateCartDisplay();
    }
}

// Update cart display
function updateCartDisplay() {
    const cartBody = document.getElementById('cartBody');
    
    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-cart-x"></i>
                <h4>Your cart is empty</h4>
                <p>Add some products to get started!</p>
            </div>
        `;
        updateCartTotals(0, 0, 0);
        return;
    }
    
    cartBody.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.icon}</div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toFixed(2)} / ${item.unit}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="btn-remove-item" onclick="removeFromCart(${item.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const gst = subtotal * 0.05;
    const total = subtotal + gst;
    
    updateCartTotals(subtotal, gst, total);
}

// Update cart totals
function updateCartTotals(subtotal, gst, total) {
    document.getElementById('cartSubtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('cartGST').textContent = `₹${gst.toFixed(2)}`;
    document.getElementById('cartTotal').textContent = `₹${total.toFixed(2)}`;
}

// Proceed to billing
function proceedToBilling() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    toggleCart();
    document.getElementById('billing').scrollIntoView({ behavior: 'smooth' });
    updateOrderSummary();
}

// Update order summary
function updateOrderSummary() {
    const orderTableBody = document.getElementById('orderTableBody');
    
    if (cart.length === 0) {
        orderTableBody.innerHTML = `
            <tr>
                <td colspan="4" class="text-center py-4">
                    <i class="bi bi-cart-x" style="font-size: 3rem; color: #ccc;"></i>
                    <p class="mt-2 text-muted">No items in cart</p>
                </td>
            </tr>
        `;
        updateOrderTotals(0, 0, 0, 0);
        return;
    }
    
    orderTableBody.innerHTML = cart.map(item => `
        <tr>
            <td>
                <strong>${item.icon} ${item.name}</strong><br>
                <small class="text-muted">${item.unit}</small>
            </td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1); updateOrderSummary();">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1); updateOrderSummary();">+</button>
                </div>
            </td>
            <td><strong>₹${(item.price * item.quantity).toFixed(2)}</strong></td>
        </tr>
    `).join('');
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountPercent = parseFloat(document.getElementById('discountInput').value) || 0;
    const discount = subtotal * (discountPercent / 100);
    const gst = (subtotal - discount) * 0.05;
    const total = subtotal - discount + gst;
    
    updateOrderTotals(subtotal, discount, gst, total);
}

// Update order totals
function updateOrderTotals(subtotal, discount, gst, total) {
    document.getElementById('orderSubtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('orderGST').textContent = `₹${gst.toFixed(2)}`;
    document.getElementById('orderTotal').textContent = `₹${total.toFixed(2)}`;
}

// Calculate total (for discount input)
function calculateTotal() {
    updateOrderSummary();
}

// Clear cart
function clearCart() {
    if (confirm('Are you sure you want to clear the cart?')) {
        cart = [];
        saveCart();
        updateCartBadge();
        updateCartDisplay();
        updateOrderSummary();
        showNotification('Cart cleared!');
    }
}

// Generate invoice
function generateInvoice() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    
    if (!customerName || !customerPhone) {
        alert('Please fill in customer name and phone number!');
        return;
    }
    
    const customerEmail = document.getElementById('customerEmail').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const customerGST = document.getElementById('customerGST').value || 'GST123456789';
    const discountPercent = parseFloat(document.getElementById('discountInput').value) || 0;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = subtotal * (discountPercent / 100);
    const gst = (subtotal - discount) * 0.05;
    const total = subtotal - discount + gst;
    
    const invoiceDate = new Date().toLocaleString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const invoiceNumber = 'INV-' + Date.now().toString().slice(-8);
    
    const invoiceHTML = `
        <div class="invoice-header">
            <h2>Premium Grocery Store</h2>
            <p>123 Main Street, City, State - 12345</p>
            <p>Phone: +91 98765 43210 | Email: info@premiumgrocery.com</p>
            <p>GSTIN: ${customerGST}</p>
            <hr>
            <h3>INVOICE</h3>
            <p><strong>Invoice No:</strong> ${invoiceNumber}</p>
            <p><strong>Date:</strong> ${invoiceDate}</p>
        </div>
        
        <div class="invoice-details">
            <div>
                <h5>Bill To:</h5>
                <p><strong>${customerName}</strong></p>
                <p>${customerPhone}</p>
                ${customerEmail ? `<p>${customerEmail}</p>` : ''}
                ${customerAddress ? `<p>${customerAddress}</p>` : ''}
                ${customerGST ? `<p><strong>GST No:</strong> ${customerGST}</p>` : ''}
            </div>
        </div>
        
        <table class="invoice-table table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${cart.map(item => `
                    <tr>
                        <td>${item.icon} ${item.name} (${item.unit})</td>
                        <td>₹${item.price.toFixed(2)}</td>
                        <td>${item.quantity}</td>
                        <td>₹${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        
        <div class="invoice-total">
            <table style="width: 300px; margin-left: auto;">
                <tr>
                    <td><strong>Subtotal:</strong></td>
                    <td style="text-align: right;">₹${subtotal.toFixed(2)}</td>
                </tr>
                ${discount > 0 ? `
                <tr>
                    <td><strong>Discount (${discountPercent}%):</strong></td>
                    <td style="text-align: right;">-₹${discount.toFixed(2)}</td>
                </tr>
                ` : ''}
                <tr>
                    <td><strong>GST (5%):</strong></td>
                    <td style="text-align: right;">₹${gst.toFixed(2)}</td>
                </tr>
                <tr style="border-top: 2px solid #000; font-size: 1.2rem;">
                    <td><strong>Grand Total:</strong></td>
                    <td style="text-align: right;"><strong>₹${total.toFixed(2)}</strong></td>
                </tr>
            </table>
        </div>
        
        <div style="margin-top: 3rem; text-align: center; padding-top: 2rem; border-top: 2px solid #e0e0e0;">
            <p><strong>Thank you for your business!</strong></p>
            <p class="text-muted">Please visit us again</p>
        </div>
    `;
    
    document.getElementById('invoiceContent').innerHTML = invoiceHTML;
    
    const invoiceModal = new bootstrap.Modal(document.getElementById('invoiceModal'));
    invoiceModal.show();
}

// Print invoice
function printInvoice() {
    const invoiceContent = document.getElementById('invoiceContent').innerHTML;
    const printWindow = window.open('', '_blank');
    
    printWindow.document.write(`
        <html>
            <head>
                <title>Invoice</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    .invoice-header { text-align: center; margin-bottom: 30px; }
                    .invoice-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                    .invoice-table th, .invoice-table td { padding: 10px; border: 1px solid #ddd; text-align: left; }
                    .invoice-table thead { background-color: #f5f5f5; }
                    .invoice-total { text-align: right; margin-top: 20px; }
                </style>
            </head>
            <body>
                ${invoiceContent}
            </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
}

// Display price management table
function displayPriceManagementTable() {
    const tbody = document.getElementById('priceTableBody');
    tbody.innerHTML = '';
    
    products.vegetables.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="font-size: 2rem;">${product.icon}</td>
            <td><strong>${product.name}</strong></td>
            <td>${product.unit}</td>
            <td>₹${product.price.toFixed(2)}</td>
            <td>
                <input type="number" 
                       class="form-control form-control-sm price-input" 
                       id="price_${product.id}" 
                       value="${product.price}" 
                       min="0" 
                       step="0.01"
                       style="width: 120px;">
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Save all prices
function saveAllPrices() {
    let hasChanges = false;
    
    products.vegetables.forEach(product => {
        const input = document.getElementById(`price_${product.id}`);
        const newPrice = parseFloat(input.value);
        
        if (newPrice && newPrice !== product.price && newPrice > 0) {
            product.price = newPrice;
            hasChanges = true;
        }
    });
    
    if (hasChanges) {
        const lastUpdated = saveVegetablePrices();
        document.getElementById('lastUpdated').textContent = lastUpdated;
        
        // Refresh product display
        displayProducts('vegetables', products.vegetables);
        
        // Show notification
        showNotification('Vegetable prices updated successfully!');
    } else {
        showNotification('No changes to save.');
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
    `;
    notification.innerHTML = `<i class="bi bi-check-circle-fill"></i> ${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

