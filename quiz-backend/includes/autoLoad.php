<?php
    spl_autoload_register("autoload");

    function autoload($ClassName): void{
        require_once "../model/$ClassName.php";
    }