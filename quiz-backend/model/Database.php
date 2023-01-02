<?php
require_once '../includes/autoLoad.php';
// set my env variable in the env variable of the app
//require_once '../../vendor/autoload.php';
//$dotenv = Dotenv\Dotenv::createImmutable("../../");
//$dotenv->load();

//echo 'h: |'.getenv('HOST')."|fin<hr>";

class Database
{
    private static string $host;
    private static string $user;
    private static string $password;
    private static string $database;

    public static ?PDO $conn = null;

    public function __construct()
    {
        self::$conn = self::connect();
    }

    public static function setConnectionInfo():void
    {
        self::$host = "localhost"; // getenv('HOST');
        self::$user = "root";// getenv('USER');
        self::$database = "quiz";// getenv('DATABASE');
        self::$password = "";// getenv('PASSWORD');
    }

    public static function connect(): PDO
    {
        self::setConnectionInfo();

        if(self::$conn == null){
            try {
                self::$conn = new PDO("mysql:host=".self::$host.";dbname=".self::$database, self::$user, self::$password);
            }catch (PDOException $e){
                die($e);
            }
        }
        return self::$conn;
    }

    public static function disconnect(): void
    {
        self::$conn = null;
    }
}
