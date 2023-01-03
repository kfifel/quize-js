<?php

require_once '../includes/autoLoad.php';

class Authentication
{
    function login():void{
        $conn = Database::connect();
        $username = $_POST['username'];
        $password = $_POST['password'];
        $query = "SELECT * from quiz.user where username = '".$username."' and password = '".$password."'";
        $res = $conn->query($query)->fetchAll(PDO::FETCH_ASSOC);
        if(count($res) === 0) echo "false";
        else{
            session_start();
            $_SESSION['user'] = new User($res[0]['id'], $res[0]['username'], $res[0]['password']);
            echo 'true';
        }
    }
}

$auth = new Authentication();


if(isset($_POST['login'])) $auth->login();