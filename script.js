document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');

    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Scroll animation
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        animateOnScrollElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate-on-scroll');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Cart functionality
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCart = document.querySelector('.close-cart');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    cartIcon.addEventListener('click', function() {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeCart.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    overlay.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Cart data
    let cart = [];
    let cartTotal = 0;
    
    // Update cart count
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        document.querySelector('.cart-count').textContent = count;
    }
    
    // Update cart total
    function updateCartTotal() {
        cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        document.querySelector('.total-amount').textContent = cartTotal.toFixed(2);
    }
    
    // Render cart items
    function renderCartItems() {
        const cartItemsContainer = document.querySelector('.cart-items');
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
            return;
        }
        
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image || 'assets/images/default-component.png'}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="decrease-quantity" data-index="${index}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase-quantity" data-index="${index}">+</button>
                    </div>
                    <button class="remove-item" data-index="${index}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });



        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1);
                }
                renderCartItems();
                updateCartCount();
                updateCartTotal();
            });
        });
        
        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart[index].quantity++;
                renderCartItems();
                updateCartCount();
                updateCartTotal();
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart.splice(index, 1);
                renderCartItems();
                updateCartCount();
                updateCartTotal();
            });
        });
    }
    
    

    
document.querySelector('.checkout-btn').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const customerName = prompt('Please enter your name for the order:');
    if (!customerName) return;
    
    // Create order object
    const order = {
        id: 'ord' + Math.random().toString(36).substr(2, 8),
        customer_name: customerName,
        date: new Date().toISOString(),
        items: cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        total: cartTotal,
        status: 'Pending'
    };
    
    // Save order (in a real app, this would be an AJAX call to the server)
    alert(`Thank you for your order, ${customerName}! Your order ID is ${order.id}. Total: ₹${cartTotal.toFixed(2)}`);
    
    // In a real app, you would send this to your server
    console.log('Order placed:', order);
    
    // Reset cart
    cart = [];
    renderCartItems();
    updateCartCount();
    updateCartTotal();
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});
    
    
    // Pre-build PC slider
    const prebuildSlider = document.querySelector('.slider');
    const prebuildPrev = document.querySelector('.slider-prev');
    const prebuildNext = document.querySelector('.slider-next');
    let currentSlide = 0;
    
    // Pre-build PC data
    const prebuilds = [
        {
            name: 'Gaming Pro',
            description: 'High-performance gaming PC for competitive players',
            specs: ['Intel i7-12700K', 'RTX 3080', '32GB DDR5', '1TB NVMe SSD'],
            price: 1999.99,
            image: 'assets/images/gaming-pc.png'
        },
        {
            name: 'Creator Workstation',
            description: 'Perfect for video editing and 3D rendering',
            specs: ['AMD Ryzen 9 5950X', 'RTX 3090', '64GB DDR4', '2TB NVMe SSD'],
            price: 2999.99,
            image: 'assets/images/workstation-pc.png'
        },
        {
            name: 'Streaming Elite',
            description: 'Optimized for live streaming and content creation',
            specs: ['Intel i9-12900K', 'RTX 3070', '32GB DDR4', '1TB NVMe SSD + 2TB HDD'],
            price: 2499.99,
            image: 'assets/images/streaming-pc.png'
        },
        {
            name: 'Budget Gamer',
            description: 'Great performance at an affordable price',
            specs: ['AMD Ryzen 5 5600X', 'RTX 3060', '16GB DDR4', '500GB NVMe SSD'],
            price: 1299.99,
            image: 'assets/images/budget-pc.png'
        },
        {
            name: 'Mini ITX Compact',
            description: 'Small form factor with big performance',
            specs: ['Intel i5-12600K', 'RTX 3060 Ti', '16GB DDR4', '1TB NVMe SSD'],
            price: 1599.99,
            image: 'assets/images/mini-pc.png'
        }
    ];
    
    // Render pre-build PCs
    function renderPrebuilds() {
        prebuildSlider.innerHTML = '';
        
        prebuilds.forEach((prebuild, index) => {
            const prebuildItem = document.createElement('div');
            prebuildItem.className = 'prebuild-item';
            prebuildItem.innerHTML = `
                <div class="prebuild-image">
                    <img src="${prebuild.image}" alt="${prebuild.name}">
                </div>
                <div class="prebuild-info">
                    <h3>${prebuild.name}</h3>
                    <p>${prebuild.description}</p>
                    <div class="prebuild-specs">
                        ${prebuild.specs.map(spec => `<span>${spec}</span>`).join('')}
                    </div>
                    <div class="prebuild-price">
                        <div class="price">₹${prebuild.price.toFixed(2)}</div>
                        <button class="btn add-to-cart" data-index="${index}">Add to Cart</button>
                    </div>
                </div>
            `;
            prebuildSlider.appendChild(prebuildItem);
        });
        
        // Add event listeners to add to cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                const prebuild = prebuilds[index];
                
                // Check if item already in cart
                const existingItem = cart.find(item => item.name === prebuild.name);
                if (existingItem) {
                    existingItem.quantity++;
                } else {
                    cart.push({
                        name: prebuild.name,
                        price: prebuild.price,
                        quantity: 1,
                        image: prebuild.image
                    });
                }
                
                renderCartItems();
                updateCartCount();
                updateCartTotal();
                
                // Show cart sidebar
                cartSidebar.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
    }
    
    // Slider navigation
    prebuildPrev.addEventListener('click', function() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSliderPosition();
        }
    });
    
    prebuildNext.addEventListener('click', function() {
        const itemWidth = document.querySelector('.prebuild-item').offsetWidth + 20;
        const visibleItems = Math.floor(prebuildSlider.parentElement.offsetWidth / itemWidth);
        
        if (currentSlide < prebuilds.length - visibleItems) {
            currentSlide++;
            updateSliderPosition();
        }
    });
    
    function updateSliderPosition() {
        const itemWidth = document.querySelector('.prebuild-item').offsetWidth + 20;
        prebuildSlider.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
    }
    
    // Custom PC builder
    const buildSteps = document.querySelectorAll('.build-steps .step');
    const componentSelector = document.querySelector('.component-selector');
    const buildSummary = document.querySelector('.build-summary');
    const buildTotalElement = document.querySelector('.build-total');
    
    // Component data
    const components = {
        processor: [
            { name: 'Intel Core Ultra 9 285K', description: '24 Cores , 24 Threads , Up To 5.7GHz , Integrated Graphics', price: 57990},
            { name: 'Intel Core i9-14900K', description: '24 Cores , 32 Threads , Up To 6.0GHz ', price: 46990},
            { name: 'Intel Core i9-14900KS (Special Edition)', description: '24 cores, 32 Threads, up to 6.2GHz', price: 43990 },
            { name: 'Intel Core i9-12900K', description: '16 Core , 24 Threads , Up To 5.2GHz', price: 33990 },
            { name: 'Intel Core i7-14700K', description: '20 cores, 28 Threads , Up To 5.6GHz', price: 33490 },
            { name: 'Intel Core i7-13700K', description: '16 Core , 24 Threads , Up To 5.4GHz', price: 32990 },
            { name: 'Intel Core i7-14700F', description: '20 Core , 28 Threads , Up To 5.4GHz', price: 28490 },
            { name: 'Intel Core i5-14600K', description: '14 Core , 20 threads , Up To 5.3GHz', price: 18990 },
            { name: 'AMD Ryzen 7 7700X', description: '8 cores, 16 threads, up to 5.4GHz', price: 399.99 },
            { name: 'Intel Core i5-13600K', description: '14 cores (6P + 8E), up to 5.1GHz', price: 319.99 }
        ],
        motherboard: [
            { name: 'ASUS ROG Maximus Z790 Hero', description: 'Intel Z790, ATX', price: 599.99 },
            { name: 'MSI MPG B650 Carbon WiFi', description: 'AMD B650, ATX', price: 299.99 },
            { name: 'Gigabyte Z690 AORUS Ultra', description: 'Intel Z690, ATX', price: 399.99 },
            { name: 'ASRock B550 Taichi', description: 'AMD B550, ATX', price: 329.99 },
            { name: 'ASUS TUF Gaming B660-PLUS', description: 'Intel B660, ATX', price: 189.99 }
        ],
        ram: [
            { name: 'Corsair Dominator Platinum 32GB', description: 'DDR5 5600MHz, CL36', price: 249.99 },
            { name: 'G.Skill Trident Z5 RGB 32GB', description: 'DDR5 6000MHz, CL36', price: 219.99 },
            { name: 'Kingston Fury Beast 32GB', description: 'DDR4 3200MHz, CL16', price: 119.99 },
            { name: 'Crucial Ballistix 32GB', description: 'DDR4 3600MHz, CL16', price: 149.99 },
            { name: 'TeamGroup T-Force Delta RGB 32GB', description: 'DDR4 3200MHz, CL16', price: 129.99 }
        ],
        storage: [
            { name: 'Samsung 980 Pro 1TB', description: 'PCIe 4.0 NVMe SSD', price: 129.99 },
            { name: 'WD Black SN850X 2TB', description: 'PCIe 4.0 NVMe SSD', price: 249.99 },
            { name: 'Crucial P5 Plus 1TB', description: 'PCIe 4.0 NVMe SSD', price: 119.99 },
            { name: 'Seagate FireCuda 530 2TB', description: 'PCIe 4.0 NVMe SSD', price: 279.99 },
            { name: 'Samsung 870 QVO 4TB', description: 'SATA SSD', price: 349.99 }
        ],
        gpu: [
            { name: 'NVIDIA RTX 4090', description: '24GB GDDR6X', price: 1599.99 },
            { name: 'AMD RX 7900 XTX', description: '24GB GDDR6', price: 999.99 },
            { name: 'NVIDIA RTX 4080', description: '16GB GDDR6X', price: 1199.99 },
            { name: 'AMD RX 7900 XT', description: '20GB GDDR6', price: 899.99 },
            { name: 'NVIDIA RTX 4070 Ti', description: '12GB GDDR6X', price: 799.99 }
        ],
        cabinet: [
            { name: 'Lian Li PC-O11 Dynamic', description: 'Full Tower, Tempered Glass', price: 149.99 },
            { name: 'Fractal Design Meshify C', description: 'Mid Tower, Tempered Glass', price: 99.99 },
            { name: 'NZXT H510 Elite', description: 'Mid Tower, Tempered Glass', price: 149.99 },
            { name: 'Corsair 4000D Airflow', description: 'Mid Tower, Tempered Glass', price: 104.99 },
            { name: 'Cooler Master MasterBox Q300L', description: 'Micro ATX, Acrylic Window', price: 49.99 }
        ]
    };
    
    // Selected components
    let selectedComponents = {
        processor: null,
        motherboard: null,
        ram: null,
        storage: null,
        gpu: null,
        cabinet: null
    };
    
    // Build step navigation
    buildSteps.forEach(step => {
        step.addEventListener('click', function() {
            const stepName = this.getAttribute('data-step');
            showComponentCategory(stepName);
            
            // Update active step
            buildSteps.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Show component category
    function showComponentCategory(category) {
        componentSelector.innerHTML = `
            <h3>Select ${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div class="component-list"></div>
        `;
        
        const componentList = document.querySelector('.component-list');
        
        components[category].forEach((component, index) => {
            const componentItem = document.createElement('div');
            componentItem.className = 'component-item';
            if (selectedComponents[category] && selectedComponents[category].name === component.name) {
                componentItem.classList.add('selected');
            }
            componentItem.innerHTML = `
                <h4>${component.name}</h4>
                <p>${component.description}</p>
                <div class="component-price">₹${component.price.toFixed(2)}</div>
            `;
            
            componentItem.addEventListener('click', function() {
                // Remove selected class from all items
                document.querySelectorAll('.component-item').forEach(item => {
                    item.classList.remove('selected');
                });
                
                // Add selected class to clicked item
                this.classList.add('selected');
                
                // Update selected component
                selectedComponents[category] = component;
                
                // Update build summary
                updateBuildSummary();
            });
            
            componentList.appendChild(componentItem);
        });
    }
    
    // Update build summary
    function updateBuildSummary() {
        const summaryItems = document.querySelector('.summary-items');
        summaryItems.innerHTML = '';
        
        let total = 0;
        
        for (const [category, component] of Object.entries(selectedComponents)) {
            if (component) {
                const summaryItem = document.createElement('div');
                summaryItem.className = 'summary-item';
                summaryItem.innerHTML = `
                    <span>${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    <span>₹${component.price.toFixed(2)}</span>
                `;
                summaryItems.appendChild(summaryItem);
                total += component.price;
            }
        }
        
        buildTotalElement.textContent = total.toFixed(2);
    }
    
    // Add custom build to cart
    document.querySelector('.add-to-cart-build').addEventListener('click', function() {
        // Check if all components are selected
        const allSelected = Object.values(selectedComponents).every(component => component !== null);
        
        if (!allSelected) {
            alert('Please select all components before adding to cart');
            return;
        }
        
        // Calculate total price
        const totalPrice = Object.values(selectedComponents).reduce((sum, component) => sum + component.price, 0);
        
        // Add to cart
        cart.push({
            name: 'Custom PC Build',
            price: totalPrice,
            quantity: 1,
            image: 'assets/images/custom-pc.png'
        });
        
        renderCartItems();
        updateCartCount();
        updateCartTotal();
        
        // Show cart sidebar
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Initialize
    renderPrebuilds();
    showComponentCategory('processor');
    
    // Responsive adjustments
    window.addEventListener('resize', function() {
        updateSliderPosition();
    });
});