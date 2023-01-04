<?php
require_once '../includes/autoLoad.php';
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
        self::$user = "kfifel";// getenv('USER');
        self::$database = "quiz";// getenv('DATABASE');
        self::$password = "password";// getenv('PASSWORD');
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
