<?php

require_once '../includes/autoLoad.php';

class User
{

    public int $id;
    public string $first_name;
    public string $last_name;
    public Array $score;
    public string $ip_address = "";
    public string $browser = "";
    public string $os = "";


    public function __construct(int $id, string $first_name, string $last_name, array $score = [], string $ip_address = '', string $browser = '', string $os = '')
    {
        $this->id = $id;
        $this->first_name = $first_name;
        $this->last_name = $last_name;
        $this->score = $score;
        $this->ip_address = $ip_address;
        $this->browser = $browser;
        $this->os = $os;
    }

    public function addScoreCollectionIfMissing(): void
    {

    }

    public function QuestionsToString():string{
        $conn = Database::connect();
        $sth = $conn->query("select * from question");
        $questions = $sth->fetchAll(PDO::FETCH_ASSOC);
        $size = count($questions);
        $res = '[';
        for ( $i = 0; $i < $size; $i++):
            $res .= $i != $size-1 ?
                ((new Question(...$questions[$i]))->toString()).','
                :(new Question(...$questions[$i]))->toString();
        endFor;
        $res .='
]';
        return $res;
    }
}
