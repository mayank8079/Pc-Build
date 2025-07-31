<?php
session_start();

// DB Connection
$conn = new mysqli("localhost", "root", "", "pc-builder");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data
$username = $_POST['username'];
$password = $_POST['password'];

// Check if user exists in the database
$sql = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();

    if (password_verify($password, $row['password'])) {
        $_SESSION['user'] = $username;

        // Check if the user is admin
        if ($username === "Mayank.admin" || $username === "smit.admin") {
            echo "<script>alert('Admin Login Successful!'); window.location.href='../admin/index.php';</script>";
        } else {
            echo "<script>alert('Login Successful!'); window.location.href='../index.php';</script>";
        }
    } else {
        echo "<script>alert('Invalid password'); window.location.href='login.php';</script>";
    }
} else {
    echo "<script>alert('User not found'); window.location.href='login.php';</script>";
}

$stmt->close();
$conn->close();
?>
