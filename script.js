document.addEventListener('DOMContentLoaded', function() {

    const menuButton = document.querySelector('.header__menu-toggle');
    const navMenu = document.querySelector('.header__nav');

    function toggleMenu() {
        navMenu.classList.toggle('header__nav--active');
    }

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', toggleMenu);
    } else {
        console.warn('Aviso: Elementos do menu não foram encontrados.');
    }
    
    
    
    const contactForm = document.getElementById('contact-form');
    const num1Span = document.getElementById('captcha-num1');
    const num2Span = document.getElementById('captcha-num2');
    const captchaInput = document.getElementById('captcha-result');
    const submitButton = document.querySelector('.form__button'); 

    
    function generateCaptcha() {
        const randomNum1 = Math.floor(Math.random() * 10) + 1;
        const randomNum2 = Math.floor(Math.random() * 10) + 1;
        
        if (num1Span) num1Span.textContent = randomNum1;
        if (num2Span) num2Span.textContent = randomNum2;
        
        if (captchaInput) captchaInput.value = '';
    }

    
    if (contactForm && num1Span && num2Span && captchaInput && submitButton) {
        
        
        generateCaptcha();

        
        submitButton.addEventListener('click', function(event) {
            
            event.preventDefault(); 

            
            const num1 = parseInt(num1Span.textContent, 10);
            const num2 = parseInt(num2Span.textContent, 10);
            const userResult = parseInt(captchaInput.value, 10);

            const correctSum = num1 + num2;

            
            if (userResult === correctSum) {
                
                alert('Envio realizado com sucesso!');
                generateCaptcha();
            } else {
                
                alert('Resultado incorreto. Tente novamente.');
                generateCaptcha();
            }
        });
    }

});