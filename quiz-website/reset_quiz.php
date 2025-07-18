<?php
session_start();

// Check if quiz is set in URL
if (!isset($_GET['quiz'])) {
    header('Location: index.php');
    exit();
}

$quiz = $_GET['quiz'];

// Reset the answered questions for this specific quiz
if (isset($_SESSION['answered_questions'][$quiz])) {
    unset($_SESSION['answered_questions'][$quiz]);
}

// Redirect back to the quiz
header('Location: quiz.php?quiz=' . $quiz);
exit();
?>