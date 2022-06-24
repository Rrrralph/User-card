const switcher = document.querySelector('#dark-mode');
const styleLink = document.querySelector('#theme-link');
const lightTheme = 'css/light.css';
const darkTheme = 'css/dark.css';

checkThemeState();

switcher.addEventListener('click', (e) => {
   changeTheme();
});

function changeTheme() {
    let currentTheme = styleLink.getAttribute('href');
    
    if (currentTheme === lightTheme) {
        currentTheme = darkTheme;
        localStorage['theme'] = darkTheme;
    } else {
        currentTheme = lightTheme;
        localStorage['theme'] = lightTheme;
    }

    styleLink.setAttribute('href', currentTheme);
}

function checkThemeState() {
    if (localStorage['theme'] === darkTheme) {
        styleLink.setAttribute('href', darkTheme);
    }
}