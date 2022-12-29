<?php

require_once 'includes/autoLoad.php';

class Admin
{

    public string $email;
    public string $password;

    public function __construct()
    {

    }


    public function addQuestions():bool
    {
        // TODO implement here
        return true;
    }

    public function deleteQuestion(): bool
    {
        // TODO implement here
        return false;
    }

    public function updateQuestion(): bool
    {
        // TODO implement here
        return false;
    }

    public function getAllQuestions(): array
    {
        // TODO implement here
        return [];
    }

}
