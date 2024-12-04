document.querySelectorAll('.nav-item.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', function () {
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.classList.add('show');
    });
    dropdown.addEventListener('mouseleave', function () {
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.classList.remove('show');
    });
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Hesla se neshodují.");
        event.preventDefault();
        return false;
    }

    var phone = document.getElementById("phone").value;
    var phonePattern = /^\+420\d{9}$/;
    if (!phonePattern.test(phone)) {
        alert("Telefonní číslo není ve správném formátu. Použijte formát +420123456789.");
        event.preventDefault();
        return false;
    }

    return true;
});