const enableDarkMode = () => {
    document.documentElement.style.setProperty('--white', '#eaeaea');
    document.documentElement.style.setProperty('--dark-gray', '#fff');
    document.documentElement.style.setProperty('--light-gray', '#efefef');
    document.documentElement.style.setProperty('--paragraph-gray', '#eaeaea');
    document.documentElement.style.setProperty('--projects-paragraph', '#333');
    document.documentElement.style.setProperty('--section-gray', '#333');
    document.documentElement.style.setProperty('--contact-links-gray', '#333');
}
const enableLightMode = () => {
    document.documentElement.style.setProperty('--white', '#fff');
    document.documentElement.style.setProperty('--dark-gray', '#333');
    document.documentElement.style.setProperty('--light-gray', '#777');
    document.documentElement.style.setProperty('--paragraph-gray', '#555');
    document.documentElement.style.setProperty('--projects-paragraph', '#777');
    document.documentElement.style.setProperty('--section-gray', '#efefef');
    document.documentElement.style.setProperty('--contact-links-gray', '#333');
}

document.querySelector('.modeBtn').innerHTML = '<button id="toggleMode" data-mode="dark"><i class="fa-solid fa-moon"></i></button>';

let toggle = document.getElementById('toggleMode');
toggle.addEventListener('click', (e)=>{
    e.preventDefault();
    if(toggle.getAttribute('data-mode') === 'dark'){
       enableDarkMode();
       localStorage.removeItem('light');
       localStorage.setItem('mode', 'dark');
       toggle.setAttribute('data-mode','light');
       toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
        enableLightMode();
        localStorage.removeItem('dark');
        localStorage.setItem('mode', 'light');
        toggle.setAttribute('data-mode','dark');
        toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

const localMode = localStorage.getItem('mode');
if(localMode === 'dark'){
    enableDarkMode();
    toggle.setAttribute('data-mode','light');
    toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else{
    enableLightMode();
    toggle.setAttribute('data-mode','dark');
    toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}



