<?php
require_once('connect.php');
try {
    $prod = $pdo->prepare('INSERT INTO `users` (`name`, `surname`, `nickname`, `email`, `password`, `phonenumber`) VALUES (:name, :surname, :nickname, :email, :password , :phonenumber);');
    $prod->bindParam(':name', $_POST['name']);
    $prod->bindParam(':surname', $_POST['surname']);
    $prod->bindParam(':nickname', $_POST['nickname']);
    $prod->bindParam(':email', $_POST['email']);
    $prod->bindParam(':password', $_POST['password']);
    $prod->bindParam(':phonenumber', $_POST['phonenumber']);
    $prod->execute();
} catch (PDOException $e) {
    echo $e->getMessage();
}
header('Location: index.php');
?>