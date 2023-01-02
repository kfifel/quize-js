<?php

require_once '../includes/autoLoad.php';

class Question
{
    public int $id;

    public string $question;

    public array $choices;

    public array $answers;

    public function __construct(int $id, string $question)
    {
        $this->id = $id;
        $this->question = $question;
        $this->addCollectionChoices();
        $this->addCollectionAnswers();
    }

    public function addCollectionAnswers(): void
    {
        $this->answers = Database::connect()->query("select * from choice where id_question = $this->id  and correctAnswer = 1")->fetchAll(PDO::FETCH_ASSOC);
        Database::disconnect();

    }

    public function addCollectionChoices(): void
    {
        $this->choices = Database::connect()->query("select * from choice where id_question = $this->id")->fetchAll(PDO::FETCH_ASSOC);
        Database::disconnect();
    }


    public function toString(): string
    {
        $size = count($this->choices);
        $choices = array();
        $corrects = array();
        for ($i = 0; $i <  $size; $i++):
            $choices[] = $this->choices[$i]['choice'];
            if($this->choices[$i]['correctAnswer'] == 1){
                $corrects[] = $i;
            }
        endfor;
        $sizeChoices = count($choices);
        $sizeCorrects = count($corrects);
        $res  = '
        {
            "question":"'.$this->question.'",
            "choices":[';
        for ($i = 0; $i < $sizeChoices; $i++){
            if( $i == $sizeChoices-1 ) $res.= '"'.$choices[$i].'"';
            else $res.= '"'.$choices[$i].'",';
        }
       $res .='],
            "answers":[ ';
        for ($i = 0; $i < $sizeCorrects; $i++){
            if( $i == $sizeCorrects-1 ) $res.= $corrects[$i];
            else $res.= $corrects[$i].',';
        }
        $res.=' ]
        }
        ';
       return $res;
    }
}



