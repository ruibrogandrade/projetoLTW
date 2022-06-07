<?php
    declare(strict_types = 1);

    session_start();

    require_once('database/connection.db.php');
    require_once('database/review_class.php');

    $db = getDatabaseConnection();
    $review = Review::insertReview($db, (int)$_POST['classification'], $_POST['comment'], $_SESSION['id'], (int)$_SESSION['id_restaurant']);

    header('Location: dishes.php?id='.$_SESSION['id_restaurant']);

?>