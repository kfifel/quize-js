<?php

require_once 'includes/autoLoad.php';

class User
{

    public int $id;
    public string $first_name;
    public string $last_name;
    public int $score;
    public string $ip_address = "";
    public string $browser = "";
    public string $os = "";


    public function __construct(int $id, string $first_name, string $last_name, int $score, string $ip_address = '', string $browser = '', string $os = '')
    {
        $this->id = $id;
        $this->first_name = $first_name;
        $this->last_name = $last_name;
        $this->score = $score;
        $this->ip_address = $ip_address;
        $this->browser = $browser;
        $this->os = $os;
    }


}
