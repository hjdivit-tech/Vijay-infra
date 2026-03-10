/**
 * Vijay Infra - Main Javascript
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Setup Sticky Navbar & Active States
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileToggle = document.getElementById('mobile-toggle');
    const sections = document.querySelectorAll('section[id]');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.remove('transparent');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.add('transparent');
        }
    });

    // 3. Mobile Menu Toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Toggle menu icon
            const icon = mobileToggle.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons(); // Re-render icon
        });
    }

    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });

    // 4. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Portfolio Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioGrid = document.getElementById('portfolio-grid');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length > 0 && portfolioItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filterValue === 'All' || filterValue === category) {
                        item.style.display = 'block';
                        // Small animation effect
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300); // match CSS transition
                    }
                });
            });
        });
    }

    // 6. Set Current Year in Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
