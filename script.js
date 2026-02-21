// ===========================
// Mobile Menu Toggle
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===========================
// Scroll Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Observe gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    observer.observe(item);
});

// Observe stat cards
document.querySelectorAll('.stat-card').forEach(card => {
    observer.observe(card);
});

// Observe benefit items
document.querySelectorAll('.benefit-item').forEach(item => {
    observer.observe(item);
});

// ===========================
// Gallery Filter
// ===========================
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hidden');
                item.style.animation = 'none';
                setTimeout(() => {
                    item.style.animation = 'scaleIn 0.4s ease';
                }, 10);
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// ===========================
// Counter Animation
// ===========================
const countUpElements = document.querySelectorAll('.stat-number');
const counterRunned = false;

const runCounter = () => {
    countUpElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps

        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        };

        updateCounter();
    });
};

// Trigger counter when stats section is visible
const statsSection = document.querySelector('.why-us');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            runCounter();
            statsObserver.unobserve(statsSection);
        }
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// ===========================
// Form Handling
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formName = document.getElementById('formName').value;
        const formPhone = document.getElementById('formPhone').value;
        const formProject = document.getElementById('formProject').value;
        const formMessage = document.getElementById('formMessage').value;

        // Log form data (Replace with actual backend call)
        console.log({
            name: formName,
            phone: formPhone,
            project: formProject,
            message: formMessage
        });

        // Show success message
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.backgroundColor = 'var(--accent-color)';

        // Reset form
        contactForm.reset();

        // Restore button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
        }, 3000);

        // Send email using FormSubmit (Free service)
        // Uncomment below and update email address
        /*
        const formData = new FormData();
        formData.append('name', formName);
        formData.append('phone', formPhone);
        formData.append('project', formProject);
        formData.append('message', formMessage);

        fetch('https://formsubmit.co/YOUR_EMAIL@example.com', {
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.ok) {
                console.log('Email sent successfully');
            }
        });
        */
    });
}

// ===========================
// Smooth Scroll Enhancement
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Navbar Background on Scroll
// ===========================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    }
});

// ===========================
// Active Navbar Link
// ===========================
const navbarLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--accent-color)';
        } else {
            link.style.color = 'var(--dark-text)';
        }
    });
});

// ===========================
// Lazy Load Images (Future Enhancement)
// ===========================
// When you add actual images, uncomment this
/*
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});
*/

console.log('RGS Interior & Furniture Website Loaded Successfully');
