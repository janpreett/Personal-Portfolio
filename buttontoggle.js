document.addEventListener('DOMContentLoaded', function() {

     // Select the See more and Hide buttons
    const btnSeeMore = document.querySelector('.btn2');
    const btnHide = document.querySelector('.btn3');

    // Select all elements with the class hidden-work
    const hiddenProjectsContainers = document.querySelectorAll('.hidden-work'); // Select all hidden projects

    //Initially, hide the Hide button
    btnHide.style.display = 'none';

    // When See more is clicked
    btnSeeMore.addEventListener('click', function(event) {
        event.preventDefault();

        // Loop through all hidden projects and set their display style to grid
        hiddenProjectsContainers.forEach(container => {
            container.style.display = 'grid';
        });

        // Hide the See more button and show the Hide button
        btnSeeMore.style.display = 'none';
        btnHide.style.display = 'block';
    });

     // When Hide is clicked
    btnHide.addEventListener('click', function(event) {
        event.preventDefault();

        // Loop through all hidden projects and set their display style to none
        hiddenProjectsContainers.forEach(container => {
            container.style.display = 'none';
        });

         // Show the See more button and hide the Hide button
        btnSeeMore.style.display = 'block';
        btnHide.style.display = 'none';
    });
});
