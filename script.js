// script.js

// Function to handle the enroll button click
function toggleEnrollOptions() {
    const enrollOptions = document.getElementById('enroll-options');
    if (enrollOptions.style.display === 'none') {
        enrollOptions.style.display = 'block';
    } else {
        enrollOptions.style.display = 'none';
    }
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const loginPage = document.getElementById('login-page');
    const loading = document.getElementById('loading');
    loading.style.display = 'flex'; // Show the loading spinner
    loginPage.style.display = 'none'; // Hide the login page

    setTimeout(() => {
        loading.style.display = 'none'; // Hide the loading spinner
        document.body.innerHTML = ''; // Clear the body
        const newAnimationContainer = document.createElement('div');
        newAnimationContainer.className = 'animation-container';
        newAnimationContainer.innerHTML = `
            <img src="logo1.jpg" alt="Animated Logo" class="logo-image">
        `;
        document.body.appendChild(newAnimationContainer);
    }, 2000); // Transition after 2 seconds
}

// Initial animation to show the login page after 3 seconds
setTimeout(() => {
    const animationContainer = document.getElementById('animation-container');
    const loginPage = document.getElementById('login-page');
    
    // Start the transition after animation
    animationContainer.style.display = 'none'; // Hide the animation container
    loginPage.style.display = 'flex'; // Show the login page
    loginPage.style.opacity = '1'; // Fade in the login page
}, 6000);
