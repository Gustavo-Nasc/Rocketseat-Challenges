const menuBtn = document.querySelector('#sidebar-menu a')
const sidebar = document.querySelector('#sidebar')

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-open')
})