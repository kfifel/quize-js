<?php
session_start();

require_once '../includes/autoLoad.php';
class UserController
{

    private User $user;

    public function __construct()
    {
        $this->user = new User(1,'khalid', 'fifel');
    }

    public function getQuestion():void{
        echo $this->user->QuestionsToString();
    }

    public function createQuestion():void
    {

    }

    public function deleteQuestion(int $id):void
    {

    }

}

$userController = new UserController();

if(isset($_GET['questions'])) $userController->getQuestion();
if(isset($_POST['save'])) $userController->createQuestion();
if(isset($_POST['delete'])) $userController->deleteQuestion($_POST['id']);