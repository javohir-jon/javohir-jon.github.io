const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
        // Check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        console.log('error r')
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_5j5xn8k', 'template_fqqmq8c', '#contact-form', 'dmPoPeT3QXHhzcksQ')
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
})