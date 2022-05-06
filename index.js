/* ========== Change navbar style on scroll ============ */
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle
        ('window-scroll', window.scrollY > 0)
})

/* ========== FAQ open close ============ */
const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        /* change icon */
        const icon = faq.querySelector('.faq-icon i')
        if (icon.className === 'fa-solid fa-plus') {
            icon.className === 'fa-solid fa-minus"'
        }
        else {
            icon.className === 'fa-solid fa-plus"'
        }
    })

});

/* swipping testimonial */

var swiper = new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        // slidesPreView: 2,
        hide: true,
    },
});



/* ========== Nav menu open close ============ */
const menu = document.querySelector('.nav-menu')
const menu_btn_open = document.querySelector('#mobile-open')
const menu_btn_close = document.querySelector('#mobile-close')

menu_btn_open.addEventListener('click', () => {
    menu.style.display = 'flex'
    menu_btn_close.style.display = 'inline-block'
    menu_btn_open.style.display = 'none'

})
const closeNav = () => {
    menu.style.display = 'none'
    menu_btn_close.style.display = 'none'
    menu_btn_open.style.display = 'inline-block'
}
closeBtn.addEventListener('click', closeNav)