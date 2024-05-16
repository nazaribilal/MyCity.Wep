document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun normal şekilde gönderilmesini engelle

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basit bir doğrulama (örneğin, email ve şifre eşleşmesi)
    if (email === 'user@example.com' && password === 'password123') {
        document.getElementById('login-message').innerText = 'Merhaba Sayfamıza Hoş Geldiniz \n Girişiniz Başarılı! ';
        document.getElementById('login-message').style.color = 'green';
    } else {
        document.getElementById('login-message').innerText = 'E-Mail veya Şifre yanlış';
        document.getElementById('login-message').style.color = 'red';
    }
});
function handleLogin(event) {
    event.preventDefault();
    
    // Giriş başarılı mesajını göster
    document.getElementById('login-section').style.display = 'none';
    const messageDiv = document.getElementById('login-message');
    messageDiv.style.display = 'block';
    messageDiv.style.fontSize = '50px'; // Font boyutunu ayarla
    
    // Mesajı 5 saniye sonra gizle
    setTimeout(() => {
        messageDiv.style.display = 'none';
        document.getElementById('login-section').style.display = 'block';
    }, 10000);
}

