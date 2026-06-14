/* =============================================================================
   script.js — JavaScript for the Home Page (index.html)
   
   HOW IT WORKS:
   - The work grid is hidden by default (see .videoGrid in style.css).
   - showSection() makes a grid visible by adding the "active" CSS class.
   - On page load, we automatically show the "all" grid so work is visible.
   ============================================================================= */

/**
 * showSection(section)
 * Hides all video grids, then shows only the one whose id matches "section".
 * 
 * Example: showSection('all') will show <div id="all" class="videoGrid">
 */
function showSection(section) {
    // Grab every element with the class "videoGrid"
    const sections = document.querySelectorAll('.videoGrid');

    // Remove "active" from all of them (hides all grids)
    sections.forEach(sec => sec.classList.remove('active'));

    // Add "active" to only the one we want to show
    document.getElementById(section).classList.add('active');
}

/* When the page finishes loading, show the full work grid automatically */
document.addEventListener('DOMContentLoaded', () => {
    showSection('all');
});
