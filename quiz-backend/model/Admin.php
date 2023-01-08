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


    public function addQuestions($question, array $choices, array $answers):string
    {
        $conn = Database::connect();
        $query = "insert into question values(null, '".$question."')";
        $res1 = $conn->query($query);
        if($res1){
            $res2 =$conn->query("select id from question order by id desc limit 1");
            $id = $res2->fetch(PDO::FETCH_ASSOC)['id'];
            for($j = 0, $jMax = count($choices); $j < $jMax; $j++){
                $exist = 0;
                foreach ($answers as $answer){
                    if($j == $answer){
                        $exist = 1;
                        break;
                    }
                }

                if($exist){
                    $conn->query("insert into choice 
                            (id_question, choice, correctAnswer) values ('".$id."','". $choices[$j]."', 1 )");
                }else{
                    $conn->query("insert into choice 
                            (id_question, choice, correctAnswer) values ('".$id."','". $choices[$j]."', 0 )");
                }

            }
            return "true";
        }
        return "false";

    }

    public function deleteQuestion($id): bool
    {
        if(Database::connect()->query("delete from quiz.choice where  id_question = $id"))
            return  (bool) Database::connect()->query("delete from quiz.question where id = $id");
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

    public function searchQuestion(string $search):string
    {
        $conn = Database::connect();
        return json_encode($conn->query("select * from question where question like '%".$search."%'")->fetchAll(PDO::FETCH_ASSOC));
    }

}
