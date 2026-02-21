/* ===========================
   Reset & Variables
   =========================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --white: #ffffff;
    --bg-light: #f8f9fa;
    --text-primary: #202124;
    --text-secondary: #5f6368;
    --border-color: #dadce0;
    --accent-blue: #1f2937;
    --accent-color: #4285f4;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: var(--text-primary);
    background-color: var(--white);
    line-height: 1.6;
}

/* ===========================
   Typography
   =========================== */
h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
}

h1 {
    font-size: 3.5rem;
    font-weight: 700;
}

h2 {
    font-size: 2.2rem;
    font-weight: 600;
}

h3 {
    font-size: 1.25rem;
    font-weight: 600;
}

p {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

/* ===========================
   Navbar
   =========================== */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--white);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.95);
}

.navbar-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
}

.navbar-brand {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.5px;
}

.nav-menu {
    display: flex;
    gap: 2rem;
}

.nav-link {
    font-size: 0.95rem;
    color: var(--text-secondary);
    font-weight: 500;
    position: relative;
}

.nav-link:hover {
    color: var(--text-primary);
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.hamburger span {
    width: 24px;
    height: 2px;
    background-color: var(--text-primary);
    transition: var(--transition);
    border-radius: 2px;
}

/* ===========================
   Buttons
   =========================== */
.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    text-transform: none;
    font-family: 'Inter', sans-serif;
}

.btn-primary {
    background-color: var(--accent-blue);
    color: white;
}

.btn-primary:hover {
    background-color: #1a1f2e;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transform: translateY(-1px);
}

.btn-secondary {
    background-color: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border-color);
}

.btn-secondary:hover {
    background-color: var(--bg-light);
    border-color: var(--text-primary);
}

/* ===========================
   Hero Section
   =========================== */
.hero {
    margin-top: 64px;
    min-height: calc(100vh - 64px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--white) 0%, var(--bg-light) 100%);
    padding: 60px 24px;
}

.hero-content {
    text-align: center;
    max-width: 700px;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
}

.hero-description {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
    line-height: 1.6;
}

.hero-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

/* ===========================
   Section Header
   =========================== */
.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-header h2 {
    margin-bottom: 0.5rem;
}

.section-header p {
    font-size: 1.1rem;
    color: var(--text-secondary);
}

/* ===========================
   Projects Section
   =========================== */
.projects {
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 24px;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.project-card {
    background: var(--white);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden;
    transition: var(--transition);
    cursor: pointer;
}

.project-card:hover {
    border-color: var(--accent-color);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-4px);
}

.project-image {
    width: 100%;
    aspect-ratio: 16 / 10;
    background: var(--bg-light);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.2rem;
    background: linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%);
    transition: var(--transition);
}

.project-card:hover .image-placeholder {
    transform: scale(1.05);
}

.project-info {
    padding: 1.5rem;
}

.project-category {
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--accent-color);
    background-color: #f1f5ff;
    padding: 4px 12px;
    border-radius: 12px;
    margin-bottom: 0.75rem;
}

.project-card h3 {
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.project-card p {
    font-size: 0.95rem;
}

/* ===========================
   Services Section
   =========================== */
.services {
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 24px;
    background: var(--white);
}

.services-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-item {
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    transition: var(--transition);
    text-align: center;
}

.service-item:hover {
    border-color: var(--accent-color);
    background-color: var(--bg-light);
}

.service-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.service-item h3 {
    margin-bottom: 0.75rem;
}

.service-item p {
    font-size: 0.95rem;
}

/* ===========================
   Stats Section
   =========================== */
.stats {
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.stat-box {
    background: var(--bg-light);
    padding: 2.5rem;
    border-radius: 8px;
    text-align: center;
    border: 1px solid var(--border-color);
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent-blue);
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.95rem;
    color: var(--text-secondary);
    font-weight: 500;
}

/* ===========================
   About Section
   =========================== */
.about {
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 24px;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
}

.about-text p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
}

.about-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.feature {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.feature strong {
    color: var(--text-primary);
    font-weight: 600;
}

.feature span {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

/* ===========================
   Contact Section
   =========================== */
.contact {
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 24px;
}

.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 2rem;
}

.contact-info {
    display: grid;
    gap: 2rem;
}

.info-block h3 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
}

.info-block a {
    color: var(--accent-color);
    font-weight: 500;
}

.info-block a:hover {
    color: var(--accent-blue);
}

.info-block p {
    color: var(--text-secondary);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 12px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    transition: var(--transition);
    color: var(--text-primary);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: var(--text-secondary);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.contact-form .btn {
    align-self: flex-start;
}

/* ===========================
   Footer
   =========================== */
.footer {
    background-color: var(--accent-blue);
    color: white;
    padding: 3rem 24px 1rem;
    margin-top: 80px;
}

.footer-content {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h4 {
    margin-bottom: 1rem;
    font-size: 0.95rem;
    font-weight: 600;
}

.footer-section p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

.footer-section ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer-section a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

.footer-section a:hover {
    color: white;
}

.footer-bottom {
    text-align: center;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;
}

/* ===========================
   Responsive Design
   =========================== */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        left: -100%;
        top: 64px;
        flex-direction: column;
        background-color: var(--white);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        padding: 2rem 0;
        gap: 0;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-link {
        display: block;
        padding: 1rem;
        border-bottom: 1px solid var(--border-color);
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    .hero-title {
        font-size: 2.2rem;
    }

    .hero-description {
        font-size: 1rem;
    }

    .hero-cta {
        flex-direction: column;
    }

    .btn {
        width: 100%;
    }

    .contact-wrapper {
        grid-template-columns: 1fr;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .services-list {
        grid-template-columns: 1fr;
    }

    .stats {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .navbar-container {
        padding: 0 16px;
    }

    h1 {
        font-size: 1.8rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    .hero {
        margin-top: 64px;
        min-height: auto;
        padding: 40px 16px;
    }

    .hero-title {
        font-size: 1.6rem;
    }

    .hero-description {
        font-size: 0.95rem;
    }

    .projects,
    .services,
    .stats,
    .about,
    .contact {
        padding: 40px 16px;
    }

    .projects-grid,
    .services-list,
    .stats {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .stat-number {
        font-size: 2rem;
    }
}
