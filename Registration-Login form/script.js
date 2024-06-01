const users = []; 


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');


const registerForm = document.querySelector('.form-box.register form');
const loginForm = document.querySelector('.form-box.login form');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});


registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const username = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    
    users.push({ username, email, password });

    
    registerForm.reset();

    alert('Registration successful! You can now login.');
    wrapper.classList.remove('active'); 
});


loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome back, ${user.username}!`);
    } else {
        alert('Invalid email or password. Please try again.');
    }

    
    loginForm.reset();
});
