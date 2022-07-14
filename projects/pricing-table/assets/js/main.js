/*===== SWIPER CONFIG =====*/
const swiper = new Swiper('.swiper', {
    spaceBetween: 18,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1025: {
            slidesPerView: 3,
        },
    },
})

/*===== MODAL =====*/
const modalBtns = document.querySelectorAll('#content-plans .plan .plan-info button'),
    modalViews = document.querySelectorAll('.modal-wrapper'),
    modalCloses = document.querySelectorAll('.modal-close')


function openModal(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, click) => {
    modalBtn.addEventListener('click', () => {
        openModal(click)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})