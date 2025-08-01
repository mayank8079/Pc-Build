<?php
session_start();
if (isset($_SESSION['username'])) {
    header("Location: ../index.html");
    exit();
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login Page with Video Background</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Video background -->
  <video autoplay muted loop playsinline id="bg-video">
    <source src="140578-775389242_small.mp4" type="video/mp4">
  </video>

  <!-- Login Form -->
  <div class="wrapper">
    <form action="check_login.php" method="post">
  <h2>Login</h2>
  <div class="input-field">
    <input type="text" name="username" required>
    <label>Username</label>
  </div>
  <div class="input-field">
    <input type="password" name="password" required>
    <label>Password</label>
  </div>
      <div class="forget">
        <label><input type="checkbox" id="remember"><p>Remember me</p></label>
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit">Log In</button>
      <div class="register">
        <p>Don't have an account? <a href="register.php">Register</a></p>
      </div>
    </form>
  </div>

</body>
</html>
