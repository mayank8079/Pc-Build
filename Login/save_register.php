<?php
session_start();
if ($_POST['captcha_input'] != $_SESSION['captcha']) {
    echo "<script>alert('Invalid CAPTCHA'); window.location.href='register.php';</script>";
    exit;
}

$conn = new mysqli("localhost", "root", "", "pc-builder");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $conn->real_escape_string($_POST['username']);
$email = $conn->real_escape_string($_POST['email']);
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
// $password = $_POST['password'];

$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
if ($conn->query($sql) === TRUE) {
    echo "<script>alert('Registered successfully!'); window.location.href='login.php';</script>";
} else {
    echo "Error: " . $conn->error;
}
$conn->close();
?>


