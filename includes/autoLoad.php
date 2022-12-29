<?php
    spl_autoload_register("autoload");

    function autoload($ClassName): void{
        require_once "Model/$ClassName.php";
    }