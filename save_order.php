<?php
include 'db.php'; // include database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $total = $_POST['total'];
    $items = $_POST['items']; // make sure this is JSON

    // Insert into database
    $sql = "INSERT INTO orders (customer_name, phone, items, total_price)
            VALUES ('$name', '$phone', '$items', '$total')";

    if ($sql === TRUE) {
        echo "Order saved successfully!";
        header("Location: thank_you.php");
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
