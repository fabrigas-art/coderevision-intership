// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        navLinks.classList.remove('active');
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Project data - could be fetched from an API in a real application
const projects = [
    {
        title: "E-commerce Website",
        description: "A fully responsive online store with shopping cart functionality.",
        technologies: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        title: "Weather App",
        description: "Real-time weather information using a weather API.",
        technologies: ["JavaScript", "API Integration"]
    },
    {
        title: "Task Manager",
        description: "A productivity app to organize your daily tasks.",
        technologies: ["HTML", "CSS", "JavaScript"]
    }
];

// Dynamically load projects
const projectGrid = document.querySelector('.project-grid');
if (projectGrid) {
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}