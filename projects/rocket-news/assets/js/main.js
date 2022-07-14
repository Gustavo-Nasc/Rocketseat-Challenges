/*===== MODAL =====*/
const modalViews = document.querySelectorAll('.modal-wrapper'),
    modalBtns = document.querySelectorAll('.modal-open'),
    modalCloses = document.querySelectorAll('.modal-close')

function modal(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*===== SCROLL REVEAL =====*/
const sr = new ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 700,
    reset: false
})

sr.reveal('#content img', { delay: 1000 })
sr.reveal('#content-text h1', { delay: 2000 })
sr.reveal('#content-text strong', { delay: 3000 })
sr.reveal('#content-text p', { delay: 4000 })
sr.reveal('#content-form label', { delay: 6000 })
sr.reveal('#content-form div', { delay: 7000 })
sr.reveal('#content > a', { delay: 9000 })
sr.reveal('#background img', { delay: 1000 })
