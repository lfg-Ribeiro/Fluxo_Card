document.querySelector('.switcher-btn').onclick = () => {
    document.querySelector('.color-switcher').classList.toggle('active');
};
let themeButtons = document.querySelectorAll('.theme-buttons');
addEventListener('DOMContentLoaded', () =>{
    document.querySelector(':root').style.setProperty('--main-color', (localStorage.getItem('bg-color')));
})
