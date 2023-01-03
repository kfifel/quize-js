<?php

require_once '../includes/autoLoad.php';

class AdminController
{
    private Admin $admin;
    public function __construct()
    {
        $this->admin = new Admin(1, "khalid@admin.com", "test");
    }

    function getAllQuestions():void{
        echo $this->admin->getAllQuestions();
    }

    public function createQuestion():void
    {
        echo $this->admin->addQuestions($_POST['question'], $_POST['choices'], $_POST['answers']);
    }
}

$adminController = new AdminController();

if(isset($_GET['questions']))    $adminController->getAllQuestions();
if(isset($_GET['save_question'])) $adminController->createQuestion();