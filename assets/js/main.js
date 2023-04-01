//CHANGE BACKGROUND HEADER
const scrollHeader = () => {
    const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') :
        header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
    //SERVICES MODAL
const modalWiews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalWiews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})
modalClose.forEach((mc) => {
        mc.addEventListener('click', () => {
            modalWiews.forEach((mv) => {
                mv.classList.remove('active-modal')
            })
        })
    })
    //Mixitup filter portfolio


let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});
//link active work


const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

//testimonial
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },

    },
});
//Scroll section active link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
    //Light dark theme
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr = scrollReveal({
    origin: 'top',
    distance: '60px',
    duraction: 2500,
    delay: 400,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, { delay: 700 })
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: 'bottom' })

// email

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project');

const sendEmail = (e) => {
    e.preventDefault()
        // Check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {} else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_rztj4xn', 'template_nxe53la', '#contact-form', 'dmPoPeT3QXHhzcksQ')
            .then(() => {
                setTimeout(() => {
                    alert('send')
                }, 5000)
            }, (error) => {
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })

        // To clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail())