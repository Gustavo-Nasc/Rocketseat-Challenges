const divSwitcher = document.querySelector('#theme-switcher')
const switcher = document.querySelector('#theme-switcher #switcher')

switcher.addEventListener('click', () => {
    divSwitcher.classList.toggle('switched')

    document.body.classList.toggle('dark-theme')
})