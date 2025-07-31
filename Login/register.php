<?php
session_start();
$captcha_code = rand(1000, 9999);
$_SESSION['captcha'] = $captcha_code;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Register</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Video background -->
  <video autoplay muted loop playsinline id="bg-video">
    <source src="140578-775389242_small.mp4" type="video/mp4">
  </video>

  <!-- Register form -->
  <div class="wrapper">
    <form action="save_register.php" method="post">
      <h2>Register</h2>
      <div class="input-field">
        <input type="text" name="username" required>
        <label>Username</label>
      </div>
      <div class="input-field">
        <input type="email" name="email" required>
        <label>Email</label>
      </div>
      <div class="input-field">
        <input type="password" name="password" required>
        <label>Password</label>
      </div>
      <div class="input-field">
        <input type="text" name="captcha_input" required>
        <label>Enter CAPTCHA: <?= $_SESSION['captcha'] ?></label>
      </div>
      <button type="submit">Register</button>
      <div class="register">
        <p>Already have an account? <a href="login.php">Login</a></p>
      </div>
    </form>
  </div>

</body>
</html>
