// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada');

    // 1. Manejo del formulario de contacto (si existe)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que el formulario se envíe

            // Obtén los valores del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Valida los campos
            if (!name || !email || !message) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            // Simula el envío del formulario
            console.log('Formulario enviado:', { name, email, message });
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');

            // Limpia el formulario después de enviar
            contactForm.reset();
        });
    }

    // 2. Animación de scroll suave para enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evita el comportamiento predeterminado

            const targetId = link.getAttribute('href'); // Obtiene el ID del objetivo
            const targetElement = document.querySelector(targetId); // Encuentra el elemento objetivo

            if (targetElement) {
                // Scroll suave hacia el elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Efecto de hover en las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'scale(1.02)'; // Escala ligeramente la sección
            section.style.transition = 'transform 0.3s ease';
        });

        section.addEventListener('mouseleave', () => {
            section.style.transform = 'scale(1)'; // Vuelve al tamaño original
        });
    });

    // 4. Cambiar el color del header al hacer scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#2E7D32'; // Verde más oscuro
        } else {
            header.style.backgroundColor = '#4CAF50'; // Verde original
        }
    });

    // 5. Mostrar u ocultar el botón "Volver arriba"
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '↑ Volver arriba';
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.padding = '10px 20px';
    scrollToTopButton.style.backgroundColor = '#4CAF50';
    scrollToTopButton.style.color = 'white';
    scrollToTopButton.style.border = 'none';
    scrollToTopButton.style.borderRadius = '5px';
    scrollToTopButton.style.cursor = 'pointer';
    scrollToTopButton.style.display = 'none'; // Oculto por defecto
    document.body.appendChild(scrollToTopButton);

    // Mostrar u ocultar el botón según el scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Scroll suave al hacer clic en el botón
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});