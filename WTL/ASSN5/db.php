<?php
    define('DB_SERVER','localhost:3309');
    define('DB_USERNAME','root');
    define('DB_PASSWORD','');
    define('DB_DATABASE','books');
    $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
?>