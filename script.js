// Contact Form Validation
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    const email = document.querySelector('#email').value;
    
    if (!validateEmail(email)) {
        e.preventDefault();
        alert('Please enter a valid email address');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}