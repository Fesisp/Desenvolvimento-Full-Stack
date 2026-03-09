const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const currentYear = document.querySelector("#current-year");
const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        nav.classList.toggle("is-open");
    });
}

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (contactForm && feedback) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            feedback.textContent = "Preencha os campos obrigatorios antes de enviar.";
            feedback.style.color = "#8a2121";
            return;
        }

        feedback.textContent = "Mensagem enviada com sucesso. Obrigado pelo contato!";
        feedback.style.color = "#0b6b2f";
        contactForm.reset();
    });
}
