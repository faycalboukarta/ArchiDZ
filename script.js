document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Projects Filter Logic (Basic Implementation)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');

            // Optional: You can add actual filtering logic here if you add data-categories to cards
            // Currently just visual interaction as requested for UI details.
        });
    });

    // Testimonial Slider Logic
    const slider = document.querySelector('.testimonials-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (slider && prevBtn && nextBtn) {
        let currentIndex = 0;
        
        const updateSlider = () => {
            const cardWidth = document.querySelector('.testimonial-card').offsetWidth;
            const gap = 20; // 20px gap from CSS
            // Right-to-Left direction means positive transform translates to the right (hiding left items)
            // But usually transform translateX works with physical directions. 
            // Let's rely on physical translation: 
            // In RTL, translating positive X moves content right, which reveals items on the left side of the track.
            slider.style.transform = `translateX(${currentIndex * (cardWidth + gap)}px)`;
        };

        nextBtn.addEventListener('click', () => {
            const cardsVisible = window.innerWidth > 992 ? 3 : window.innerWidth > 768 ? 2 : 1;
            const totalCards = document.querySelectorAll('.testimonial-card').length;
            
            if (currentIndex < totalCards - cardsVisible) {
                currentIndex++;
                updateSlider();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        // Handle resize
        window.addEventListener('resize', () => {
            currentIndex = 0;
            updateSlider();
        });
    }
});
