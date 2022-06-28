const switcher = document.querySelector('#dark-mode');
const styleLink = document.querySelector('#theme-link');
const lightTheme = 'css/light.css';
const darkTheme = 'css/dark.css';
const isDarkTheme = false;

checkThemeState();

switcher.addEventListener('click', (e) => {
   changeTheme();
});

function changeTheme() {
    const currentTheme = styleLink.getAttribute('href');

    const newTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
    localStorage['theme'] = newTheme;

    styleLink.setAttribute('href', newTheme);
}

// function changeTheme() {
//     const currentTheme = styleLink.getAttribute('href');

//     const newTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
//     localStorage['theme'] = newTheme;

//     styleLink.setAttribute('href', newTheme);
// }

function checkThemeState() {
    if (localStorage['theme'] === darkTheme) {
        styleLink.setAttribute('href', darkTheme);
    }
}