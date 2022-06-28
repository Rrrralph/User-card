const switcher = document.querySelector('#theme-switcher');
const lightTheme = 'light';
const darkTheme = 'dark';
const body = document.body;
let currentTheme = localStorage['theme'] || lightTheme;

checkThemeState();

switcher.addEventListener('click', (e) => {
   changeTheme();
});

function changeTheme() {
    const newTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
    body.classList.add(newTheme);
    body.classList.remove(currentTheme);

    currentTheme = newTheme;
    localStorage['theme'] = newTheme;
}

function checkThemeState() {
    if(localStorage['theme']) {
        body.classList = localStorage['theme'];
    }
}