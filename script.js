let menu = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar');

menu.onclick = () => 
{
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}

window.onscroll = () => 
{
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', 
{
	strings: ['Frontend Developer', 'Backend Developer', 'Web Designer', 'YouTuber'], 
	typeSpeed: 80,
	backSpeed: 80,
	backDelay: 1200,
	loop: true,
});

// Slider Function for Individual Sliders
function slider(sliderClass) {
    let slides = document.querySelectorAll(`.${sliderClass} .slide`);
    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    // Auto slide every 3 seconds
    setInterval(nextSlide, 3000);
}

// Initialize sliders for each section
slider('first-slider');
slider('second-slider');
slider('third-slider'); // Added the third slider


