/**
 * Color Splash - Unicorn Boyama Kitabı
 * Main JavaScript Functions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobil menü işlevi
    initMobileMenu();
    
    // Ekran görüntüleri slider
    initScreenshotsSlider();
    
    // Smooth scrolling
    initSmoothScrolling();
    
    // Form validation (iletişim sayfası için)
    initFormValidation();
    
    // Current year güncelleme
    updateCurrentYear();
    
    // Lazy loading
    initLazyLoading();
    
    // Accordion (FAQ için)
    initAccordion();
});

/**
 * Mobil menü işlevi
 */
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        
        // Menü dışına tıklanınca kapat
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !mainNav.contains(e.target)) {
                mobileToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
        
        // Menü linklerine tıklanınca kapat
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }
}

/**
 * Ekran görüntüleri slider
 */
function initScreenshotsSlider() {
    const screenshotsContainer = document.querySelector('.app-screenshots');
    if (!screenshotsContainer) return;
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    screenshotsContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        screenshotsContainer.classList.add('active');
        startX = e.pageX - screenshotsContainer.offsetLeft;
        scrollLeft = screenshotsContainer.scrollLeft;
    });
    
    screenshotsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        screenshotsContainer.classList.remove('active');
    });
    
    screenshotsContainer.addEventListener('mouseup', () => {
        isDown = false;
        screenshotsContainer.classList.remove('active');
    });
    
    screenshotsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - screenshotsContainer.offsetLeft;
        const walk = (x - startX) * 2;
        screenshotsContainer.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events for mobile
    let startTouch;
    let scrollStart;
    
    screenshotsContainer.addEventListener('touchstart', (e) => {
        startTouch = e.touches[0].pageX;
        scrollStart = screenshotsContainer.scrollLeft;
    });
    
    screenshotsContainer.addEventListener('touchmove', (e) => {
        if (!startTouch) return;
        const touch = e.touches[0].pageX;
        const walk = (startTouch - touch) * 2;
        screenshotsContainer.scrollLeft = scrollStart + walk;
    });
    
    screenshotsContainer.addEventListener('touchend', () => {
        startTouch = null;
    });
}

/**
 * Smooth scrolling
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Form validation
 */
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    let isSubmitting = false;
    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        formInputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
        });
        return isValid;
    }
    
    // Single input validation
    function validateInput(input) {
        const errorElement = input.nextElementSibling;
        let isValid = true;
        let errorMessage = '';
        
        // Required field check
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            errorMessage = 'Bu alan zorunludur';
        }
        
        // Email format check
        if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value.trim())) {
                isValid = false;
                errorMessage = 'Geçerli bir e-posta adresi giriniz';
            }
        }
        
        // Minimum length check
        if (input.hasAttribute('data-minlength') && input.value.trim()) {
            const minLength = parseInt(input.getAttribute('data-minlength'));
            if (input.value.trim().length < minLength) {
                isValid = false;
                errorMessage = `En az ${minLength} karakter girilmelidir`;
            }
        }
        
        // Maximum length check
        if (input.hasAttribute('data-maxlength') && input.value.trim()) {
            const maxLength = parseInt(input.getAttribute('data-maxlength'));
            if (input.value.trim().length > maxLength) {
                isValid = false;
                errorMessage = `En fazla ${maxLength} karakter girilmelidir`;
            }
        }
        
        // Show or hide error message
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = errorMessage;
            errorElement.style.display = isValid ? 'none' : 'block';
        }
        
        // Add valid/invalid styling
        input.classList.toggle('is-invalid', !isValid);
        input.classList.toggle('is-valid', isValid && input.value.trim());
        
        return isValid;
    }
    
    // Validate on blur and input
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                validateInput(this);
            }
        });
    });
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            showAlert('Lütfen form alanlarını doğru şekilde doldurunuz', 'error');
            return;
        }
        
        // Prevent double submission
        if (isSubmitting) {
            console.log('Form zaten gönderiliyor, lütfen bekleyin...');
            return;
        }
        
        isSubmitting = true;
        
        // Get form data
        const formData = new FormData(this);
        
        // Disable submit button
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Gönderiliyor...';
        
        // Simulate form submission (since we don't have PHP backend)
        setTimeout(() => {
            // Reset form
            contactForm.reset();
            
            // Clear validation classes
            formInputs.forEach(input => {
                input.classList.remove('is-valid', 'is-invalid');
                const errorElement = input.nextElementSibling;
                if (errorElement && errorElement.classList.contains('error-message')) {
                    errorElement.textContent = '';
                    errorElement.style.display = 'none';
                }
            });
            
            // Show success message
            showAlert('Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.', 'success');
            
            // Reset button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
            isSubmitting = false;
        }, 2000);
    });
}

/**
 * Show alert message
 */
function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    // Style the alert
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 9999;
        max-width: 400px;
        word-wrap: break-word;
        animation: slideInRight 0.3s ease;
    `;
    
    // Set background color based on type
    switch (type) {
        case 'success':
            alert.style.backgroundColor = '#28a745';
            break;
        case 'error':
            alert.style.backgroundColor = '#dc3545';
            break;
        case 'warning':
            alert.style.backgroundColor = '#ffc107';
            alert.style.color = '#000';
            break;
        default:
            alert.style.backgroundColor = '#17a2b8';
    }
    
    // Add CSS animation
    if (!document.querySelector('#alert-animations')) {
        const style = document.createElement('style');
        style.id = 'alert-animations';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        alert.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (alert.parentNode) {
                alert.remove();
            }
        }, 300);
    }, 5000);
}

/**
 * Update current year
 */
function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Lazy loading for images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

/**
 * Accordion functionality (for FAQ pages)
 */
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            
            // Close other accordions
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    const otherItem = otherHeader.parentElement;
                    const otherContent = otherItem.querySelector('.accordion-content');
                    otherItem.classList.remove('active');
                    otherContent.style.maxHeight = null;
                }
            });
            
            // Toggle current accordion
            accordionItem.classList.toggle('active');
            
            if (accordionItem.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
}

/**
 * Testimonials slider (if needed)
 */
function initTestimonialsSlider() {
    const slider = document.querySelector('.testimonials-slider');
    if (!slider) return;
    
    const testimonials = slider.querySelectorAll('.testimonial');
    if (testimonials.length <= 1) return;
    
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }
    
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }
    
    // Initialize
    showTestimonial(currentIndex);
    
    // Auto-rotate every 5 seconds
    setInterval(nextTestimonial, 5000);
}

/**
 * Screenshot navigation functions for download page
 */
let currentScreenshotIndex = 0;

function prevScreenshot() {
    const slider = document.querySelector('.screenshots-slider');
    const items = document.querySelectorAll('.screenshot-item');
    
    if (!slider || !items.length) return;
    
    currentScreenshotIndex = Math.max(0, currentScreenshotIndex - 1);
    scrollToScreenshot(currentScreenshotIndex);
}

function nextScreenshot() {
    const slider = document.querySelector('.screenshots-slider');
    const items = document.querySelectorAll('.screenshot-item');
    
    if (!slider || !items.length) return;
    
    currentScreenshotIndex = Math.min(items.length - 1, currentScreenshotIndex + 1);
    scrollToScreenshot(currentScreenshotIndex);
}

function scrollToScreenshot(index) {
    const slider = document.querySelector('.screenshots-slider');
    const items = document.querySelectorAll('.screenshot-item');
    
    if (!slider || !items[index]) return;
    
    const item = items[index];
    const itemWidth = item.offsetWidth + 20; // 20px gap
    slider.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
    });
}

/**
 * Initialize screenshot touch/swipe navigation
 */
function initScreenshotNavigation() {
    const slider = document.querySelector('.screenshots-slider');
    if (!slider) return;
    
    let startX = 0;
    let endX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });
    
    slider.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diffX = startX - endX;
        
        if (Math.abs(diffX) > swipeThreshold) {
            if (diffX > 0) {
                // Swipe left - next screenshot
                nextScreenshot();
            } else {
                // Swipe right - previous screenshot
                prevScreenshot();
            }
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (document.querySelector('.screenshots-container')) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevScreenshot();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextScreenshot();
            }
        }
    });
}

// Initialize screenshot navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScreenshotNavigation();
});

// Export functions for use in other scripts
window.ColorSplashApp = {
    showAlert,
    initAccordion,
    initTestimonialsSlider,
    prevScreenshot,
    nextScreenshot
}; 