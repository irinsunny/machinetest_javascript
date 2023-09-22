document.addEventListener('DOMContentLoaded', function () {
    //getting value enteredby user
    const form = document.getElementById('firstform');
    const username = document.getElementById('username');
    const pass = document.getElementById('password');
    //error messages
    const nameError = document.getElementById('usernameerror');
    const passError = document.getElementById('passworderror');
    // checking if admin or customer
    username.addEventListener('input', function (event) {
        event.preventDefault();
        if (username.value === 'admin') {

            nameError.textContent = "Valid"
            pass.addEventListener('input', function (event) {
                event.preventDefault();
                const passInput = pass.value.toString(); // 
                const length = passInput.length;
                if (pass.value === "admin@123" && length >= 4) {
                    passError.textContent = 'Valid'
                    window.location.href = 'admin.html';
                }
                else {
                    passError.textContent = 're-try with atleast 4 characters';
                }
            });
        }
        else if (username.value === 'customer') {
            nameError.textContent = "Valid"
            pass.addEventListener('input', function (event) {
                event.preventDefault();
                const passInput = pass.value.toString(); // 
                const length = passInput.length;
                if (pass.value === "cust@123" && length >= 4) {
                    passError.textContent = 'Valid'
                    window.location.href = 'travelsecondpage.html';
                }
                else {
                    passError.textContent = 're-try with atleast 4 characters';
                }
            });
        }
        
            else {
            nameError.textContent = 'Invalid User';
        }
    });


 
});



 