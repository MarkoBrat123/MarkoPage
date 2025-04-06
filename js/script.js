$(document).ready(function () {
    $('#contactForm').submit(function (event) {
        event.preventDefault(); // Prevents form submission

        $('.error').hide(); // Hide all previous error messages
        var isValid = true;

        // Validate Name
        if ($('#name').val() === '') {
            $('#nameError').text('Name is required').show();
            isValid = false;
        }

        // Validate Email
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if ($('#email').val() === '' || !emailPattern.test($('#email').val())) {
            $('#emailError').text('Please enter a valid email address').show();
            isValid = false;
        }

        // Validate Phone
        var phonePattern = /^\+356 \d{4} \d{4}$/;
        if ($('#phone').val() === '' || !phonePattern.test($('#phone').val())) {
            $('#phoneError').text('Please enter a valid phone number (+356 #### ####)').show();
            isValid = false;
        }

        // Validate Message
        if ($('#message').val().length < 10) {
            $('#messageError').text('Message must contain at least 10 characters').show();
            isValid = false;
        }

        // If all fields are valid
        if (isValid) {
            alert('Thank you! Your message has been sent.');
            // Optional: You can clear the form here if desired
            $('#contactForm')[0].reset(); // Reset form fields
        }
    });
});

    $('.view-more-btn').click(function () {
        const targetId = $(this).data('target');
        const targetDiv = $('#' + targetId);

       
        if (targetDiv.is(':visible')) {
            targetDiv.slideUp();  
            $(this).text('View More'); 
        } else {
            targetDiv.slideDown(); 
            $(this).text('View Less');  
        }
    });
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-item img');
    const lightbox = document.createElement('div');
    const lightboxImage = document.createElement('img');
    lightbox.classList.add('lightbox');
    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    images.forEach(image => {
        image.addEventListener('click', () => {
            lightboxImage.src = image.src;
            lightbox.style.display = 'block';
        });
    });
});
