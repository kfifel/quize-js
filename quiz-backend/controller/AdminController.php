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
}

$adminController = new AdminController();

if(isset($_GET['questions']))    $adminController->getAllQuestions();