        function validateForm() {
            const email = document.getElementById('email').value;
            const confirmEmail = document.getElementById('confirmEmail').value;

            if (email !== confirmEmail) {
                alert('Error: Email addresses do not match!');
                return false;
            }
            alert('Form submitted successfully!');
            return true;
        }
 