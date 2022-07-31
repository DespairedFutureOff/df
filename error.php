<?php
switch($_GET['code'])
{
case '404':header('Location: https://despairedfutureoff.github.io/df/erreur-404.php');
break;
default:header('Location: https://despairedfutureoff.github.io/df/');
}
?>