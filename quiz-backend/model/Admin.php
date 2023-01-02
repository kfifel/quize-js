<?php

require_once '../includes/autoLoad.php';

class Admin
{
    private int $id;
    public string $email;
    public string $password;

    public function __construct(int $id, string $email, string $password)
    {
        $this->id = $id;
        $this->email = $email;
        $this->password = hash("sha256", $password);
    }


    public function addQuestions():bool
    {
        return true;
    }

    public function deleteQuestion(): bool
    {

        return false;
    }

    public function updateQuestion(): bool
    {

        return false;
    }

    public function getAllQuestions(): string
    {
        $conn = Database::connect();
        return json_encode($conn->query("select * from question")->fetchAll(PDO::FETCH_ASSOC));
    }

}
