function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

function showSection(section) {
    const sections = document.querySelectorAll('.videoGrid');
    sections.forEach(sec => sec.classList.remove('active'));

    document.getElementById(section).classList.add('active');
}

// Default to show 'All' section
document.addEventListener('DOMContentLoaded', () => {
    showSection('all');
});


