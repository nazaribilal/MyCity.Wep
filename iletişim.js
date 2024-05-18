function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var city = document.getElementById('city').value;
    var hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    var gender = document.querySelector('input[name="gender"]:checked');

    if (name === "" || email === "" || city === "" || hobbies.length === 0 || !gender) {
        alert("Tüm alanlar doldurulmalıdır!");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Geçerli bir e-posta adresi giriniz!");
        return false;
    }

    return true;
}
