<?php

require_once 'includes/autoLoad.php';

class Score
{

    public int $id_user;
    public int $score;
    public $time_passed;
    public $date;

    public function __construct(int $id_user, int $score, $time_passed, $date)
    {
        $this->id_user = $id_user;
        $this->score = $score;
        $this->time_passed = $time_passed;
        $this->date = $date;
    }

}
