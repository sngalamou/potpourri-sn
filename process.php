<?php
$mysqli = new mysqli('localhost', 'root', '', 'crud-1') or die(mysqli_error($mysqli));

if (isset($_POST['save'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $zip = $_POST['zip'];

    $mysqli->query("INSERT INTO data (name, email, city, state, zip) VALUES('$name', '$email', '$city', '$state', '$zip')") or
        die($mysqli->error);
}

?>