// Load header and footer components
async function loadComponents() {
    try {
        const headerResponse = await fetch('components/header.html');
        const headerContent = await headerResponse.text();
        const headerElement = document.querySelector('header');
        if (headerElement) {
            headerElement.innerHTML = headerContent;
            setActiveNavLink();
        }

        const footerResponse = await fetch('components/footer.html');
        const footerContent = await footerResponse.text();
        const footerElement = document.querySelector('footer');
        if (footerElement) {
            footerElement.innerHTML = footerContent;
            document.getElementById('spanYear').textContent = new Date().getFullYear();
        }
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);