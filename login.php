error_reporting(E_ALL);
ini_set('display_errors', 1);

<?php
session_start();

// Örnek kullanıcı verileri (genelde bu veriler bir veritabanından alınır)
$valid_email = "g231210553@sakarya.edu.tr";
$valid_password = "sifre123";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // E-mail ve şifre doğrulama
    if ($email == $valid_email && $password == $valid_password) {
        $_SESSION['loggedin'] = true;
        $_SESSION['email'] = $email;
        header("Location: Hoşgeldiniz.html");
        exit;
    } else {
       header("location: GirişBaşarısız.html");
    }
}
?>
