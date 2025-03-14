// Evento que impone el loader hasta que la web se cargue por completo

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.classList.add("loader--hidden");
        loader.addEventListener("transitionend", () => {
            if (loader.parentNode) { // verificamos si el elemento todavía está en el DOM
                loader.parentNode.removeChild(loader);
            }
        });
    }
});

// Funcion para scroll correcto
$(document).ready(function () {
    $('.nav-link').on('click', function (event) {
        event.preventDefault();
        const target = $(this.getAttribute('href'));
        const targetPosition = target.offset().top;

        // Scroll to the target position, minus the height of the sticky navbar
        $('html, body').animate({ scrollTop: targetPosition - 75, behavior: 'smooth' }, 10);
    });
});

// Funcion Scroll to top 

const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll to sections

// Funcion para enviar correos mediante EmailJS

// function getSelectedOption() {
//     var option = document.querySelector('input[name="emailTo"]:checked').value;

//     if (option === 'sales') {
//         option = 'gonzalezmoralesmauricioo@gmail.com';
//     } else if (option === 'services') {
//         option = 'customer.service@ssnegroup.com';
//     }

//     let parms = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         company: document.getElementById("company").value,
//         message: document.getElementById("message").value,
//         typeQ: document.getElementById("tipoConsulta").value,
//         emailTo: option,
//     }

//     emailjs.send("service_8lugv4k", "template_3iyfomi", parms)
//         .then(function (response) {
//             Swal.fire({
//                 title: "Email Sent!",
//                 text: "Please check your email for a future notification",
//                 icon: "success",
//                 confirmButtonColor: '#36939B'
//             });
//         })
//         .catch(function (error) {
//             Swal.fire({
//                 title: "Email NOT Sent!",
//                 text: "Please contact for other way",
//                 icon: "error",
//                 confirmButtonColor: '#36939B'
//             });
//         });

//     return false;
// }