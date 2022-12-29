<?php

require_once 'includes/autoLoad.php';

class Question
{
    public int $id;

    public string $question;

    public array $choices;

    public array $answers;

    public function __construct()
    {
        // ...
    }

}