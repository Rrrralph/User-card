const switcher = document.querySelector('#dark-mode');

if (!localStorage['theme']) {
    localStorage['theme'] = 'light';
} 

switcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-body');
});