document.addEventListener('DOMContentLoaded', () => {
    // Array of all flippable page wrappers
    const pageWrappers = document.querySelectorAll('.page-wrapper');
    // Current page index (which wrapper is on top and can be flipped)
    let currentPageIndex = 0; 

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Function to check button visibility
    const updateButtons = () => {
        // Next button is hidden if we are past the last flippable page
        nextBtn.style.display = currentPageIndex < pageWrappers.length ? 'block' : 'none';
        
        // Prev button is hidden before the first flippable page
        prevBtn.style.display = currentPageIndex > 0 ? 'block' : 'none';
    };

    const flipPage = (direction) => {
        if (direction === 'next') {
            if (currentPageIndex < pageWrappers.length) {
                // Get the current wrapper and add the 'flipped' class
                pageWrappers[currentPageIndex].classList.add('flipped');
                // Move to the next flippable page
                currentPageIndex++; 
            }
        } else if (direction === 'prev') {
            if (currentPageIndex > 0) {
                // Move back to the previous flippable page
                currentPageIndex--;
                // Remove the 'flipped' class
                pageWrappers[currentPageIndex].classList.remove('flipped');
            }
        }
        updateButtons();
    };

    // Event Listeners
    nextBtn.addEventListener('click', () => flipPage('next'));
    prevBtn.addEventListener('click', () => flipPage('prev'));

    // Initial button state
    updateButtons();
});