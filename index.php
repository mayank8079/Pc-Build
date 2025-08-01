<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechBuild - Custom PC Solutions</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body>
    <header>
        <div class="container">
            
            <!-- Mobile Menu Button -->
            <div class="mobile-menu"><i class="fas fa-bars"></i></div>
            
            <!-- Navbar -->
            <nav>
                <ul>
                    <input type="image" src="./assets/images/pc_modification.png" alt=""
                        style="height: 50px; width: 150px;">
                    <div>
                        <li><a href="#home">Home</a></li>
                    </div>
                    <div>
                        <li><a href="#prebuild">Pre-Build PC</a></li>
                    </div>
                    <div>
                    </div>
                <div>
                    <li><a href="#custom">Custom Pc Build</a></li>
                </div>
                <div>
                    <li><a href="#services">Services</a></li>
                </div>
                <div>
                    <li><a href="#about">About</a></li>
                </div>
                <div>
                    <li><a href="Maintenance.php">Maintenance</a></li>
                </div>
                </ul>
            </nav>

            <div class="right-icons">
                <div class="cart-icon">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="cart-count">0</span>
                </div>

                <?php session_start(); ?>
                <a href="<?php echo !isset($_SESSION['user']) ? 'Login/login.php':''  ; ?>">
                  
                        
                        <i class="fa fa-user"></i>
                </a>


            </div>


        </div>
    </header>


    <!-- Cart Sidebar -->
    <div class="cart-sidebar">
        <div class="cart-header">
            <h3>Your Cart</h3>
            <button class="close-cart">&times;</button>
        </div>
        <div class="cart-items">
            <!-- Cart items will be added here dynamically -->
        </div>
        <div class="cart-total">
            <span>Total: ₹<span class="total-amount">0</span></span>
            <button class="checkout-btn">Checkout</button>
        </div>
    </div>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <h1 class="animate-on-scroll">Build Your Dream PC</h1>
                <p class="animate-on-scroll">Customize every component or choose from our pre-built masterpieces</p>
                <div class="hero-buttons animate-on-scroll">
                    <a href="#custom" class="btn">Custom Build</a>
                    <a href="#prebuild" class="btn btn-outline">Pre-Builds</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Pre-Build PCs Section -->
    <section id="prebuild" class="section prebuild-section">
        <div class="container">
            <h2 class="section-title animate-on-scroll">Pre-Build PCs</h2>
            <p class="section-subtitle animate-on-scroll">Choose from our expertly crafted configurations</p>

            <div class="prebuild-slider animate-on-scroll">
                <div class="slider-container">
                    <div class="slider">
                        <!-- Pre-build PC items will be added here by JavaScript -->
                    </div>
                    <button class="slider-prev"><i class="fas fa-chevron-left"></i></button>
                    <button class="slider-next"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
    </section>

    <!-- Custom Build Section -->
    <section id="custom" class="section custom-build-section">
        <div class="container">
            <h2 class="section-title animate-on-scroll">Custom PC Builder</h2>
            <p class="section-subtitle animate-on-scroll">Select each component to build your perfect system</p>

            <div class="build-steps animate-on-scroll">
                <div class="step active" data-step="processor">
                    <span>1</span>
                    <p>Processor</p>
                </div>
                <div class="step" data-step="motherboard">
                    <span>2</span>
                    <p>Motherboard</p>
                </div>
                <div class="step" data-step="ram">
                    <span>3</span>
                    <p>RAM</p>
                </div>
                <div class="step" data-step="storage">
                    <span>4</span>
                    <p>Storage</p>
                </div>
                <div class="step" data-step="gpu">
                    <span>5</span>
                    <p>GPU</p>
                </div>
                <div class="step" data-step="cabinet">
                    <span>6</span>
                    <p>Cabinet</p>
                </div>
            </div>

            <div class="component-selector">
                <!-- Components will be loaded here by JavaScript -->
            </div>

            <div class="build-summary animate-on-scroll">
                <h3>Your Build Summary</h3>
                <div class="summary-items">
                    <!-- Selected components will be shown here -->
                </div>
                <div class="summary-total">
                    <p>Estimated Total: ₹<span class="build-total">0</span></p>
                    <button class="btn add-to-cart-build">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>




    <!-- Services Section -->
    <section id="services" class="section services-section">
        <div class="container">
            <h2 class="section-title animate-on-scroll">Our Services</h2>
            <p class="section-subtitle animate-on-scroll">Beyond just building PCs</p>

            <div class="services-grid">
                <div class="service-card animate-on-scroll">
                    <i class="fas fa-tools"></i>
                    <h3>PC Maintenance</h3>
                    <p>Keep your system running smoothly with our maintenance services.</p>
                </div>
                <div class="service-card animate-on-scroll">
                    <i class="fas fa-broom"></i>
                    <h3>Cleaning</h3>
                    <p>Professional cleaning to remove dust and improve cooling.</p>
                </div>
                <div class="service-card animate-on-scroll">
                    <i class="fas fa-magic"></i>
                    <h3>Upgrades</h3>
                    <p>Boost your system's performance with component upgrades.</p>
                </div>
                <div class="service-card animate-on-scroll">
                    <i class="fas fa-shield-alt"></i>
                    <h3>Virus Removal</h3>
                    <p>Complete virus scanning and removal with data protection.</p>
                </div>
            </div>
        </div>
    </section>








    <!-- About Section -->
    <section id="about" class="section about-section">
        <div class="container">
            <div class="about-content">
                <div class="about-text animate-on-scroll">
                    <h2 class="section-title">About TechBuild</h2>
                    <p>Founded in 2023, TechBuild is dedicated to providing high-quality custom PC solutions for gamers,
                        creators, and professionals.</p>
                    <p>Our team of experts carefully selects each component to ensure optimal performance and
                        reliability for every build.</p>
                    <p>Whether you need a powerful workstation, a gaming rig, or a compact home theater PC, we've got
                        you covered.</p>
                </div>
                <div class="about-image animate-on-scroll">
                    <img src="assets/images/about-pc.png" alt="About TechBuild">
                </div>
            </div>
        </div>
    </section>







    <!-- Footer -->

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>TechBuild</h3>
                    <p>Building dreams, one component at a time.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#prebuild">Pre-Builds</a></li>
                        <li><a href="#custom">Custom Build</a></li>
                        <li><a href="#services">Services</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact</h3>
                    <p>info@techbuild.com</p>
                    <p>+91 9978716188</p>
                    <p>+91 7600088311</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 TechBuild. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>

</html>
