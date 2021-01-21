// Select pages
const loginForm = document.querySelector('#loginForm');
const regForm = document.querySelector('#regForm');
const home = document.querySelector('#home');

// Select Elements of Home Page
const log = loginForm.querySelector('#log');
const reg = loginForm.querySelector('#reg');

let login = () => {
    home.style.display = 'none';
    regForm.style.display = 'none';

    loginForm.style.display = 'block';
}

let register = () => {
    home.style.display = 'none';
    loginForm.style.display = 'none';

    regForm.style.display = 'block';
}