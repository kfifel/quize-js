<?php

require_once '../includes/autoLoad.php';

class Choices
{
    public int $id_question;
    public string $choice;
    public bool $correctAnswer;


    public function __construct(int $id_question, string $choice, bool $correctAnswer)
    {
        $this->id_question = $id_question;
        $this->choice = $choice;
        $this->correctAnswer = $correctAnswer;
    }


}
