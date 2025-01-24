const faqs = document.querySelectorAll('.faq');
const slides = document.querySelector('.slides');

faqs.forEach(faq => {
    const question = faq.querySelector('.faq-question');
    const answer = faq.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        answer.classList.toggle('open');

        if (answer.classList.contains('open')) {
            question.innerHTML = question.innerHTML.replace('&#9662;', '&#9652;');
        } else {
            question.innerHTML = question.innerHTML.replace('&#9652;', '&#9662;');
        }
    });
});

        const slide = document.querySelectorAll('.slide');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        const dots = document.querySelectorAll('.dot');

        let index = 0;

        function updateSlider() {
            slides.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === index);
            });
        }

        next.addEventListener('click', () => {
            index = (index + 1) % slide.length;
            updateSlider();
        });

        prev.addEventListener('click', () => {
            index = (index - 1 + slide.length) % slide.length;
            updateSlider();
        });

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                index = idx;
                updateSlider();
            });
        });
