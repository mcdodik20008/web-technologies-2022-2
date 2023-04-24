<?php
$a = 100;
$b = 200;

if ($a >= 0 && $b >= 0) {
    echo $a - $b;
} elseif ($a < 0 && $b < 0) {
    echo $a * $b;
} else {
    echo $a + $b;
}
echo "<br>------------2------------<br>";
function secondScript(float $number)
{
    switch ($number) {
        case 0:
            $number = printmy($number);
        case 1:
            $number = printmy($number);
        case 2:
            $number = printmy($number);
        case 3:
            $number = printmy($number);
        case 4:
            $number = printmy($number);
        case 5:
            $number = printmy($number);
        case 6:
            $number = printmy($number);
        case 7:
            $number = printmy($number);
        case 8:
            $number = printmy($number);
        case 9:
            $number = printmy($number);
        case 10:
            $number = printmy($number);
        case 11:
            $number = printmy($number);
        case 12:
            $number = printmy($number);
        case 13:
            $number = printmy($number);
        case 14:
            $number = printmy($number);
        case 15:
            printmy($number);
    }
}

secondScript(5);

function printmy(float $number): float
{
    print_r($number);
    echo '<br>';
    return $number + 1;
}

echo "<br>------------3------------<br>";

function plus($first, $second)
{
    return $first + $second;
}

function minus($first, $second)
{
    return $first - $second;
}

function multiply($first, $second): float|int
{
    return $first * $second;
}

function division($first, $second): float|int
{
    return $first / $second;
}

echo "<br>------------4------------<br>";

function mathOperation($arg1, $arg2, $operation)
{
    switch ($operation) {
        case 'plus':
            return plus($arg1, $arg2);
        case 'minus':
            return minus($arg1, $arg2);
        case 'multiply':
            return multiply($arg1, $arg2);
        case 'division':
            return division($arg1, $arg2);
    }
}

echo "<br>------------5------------<br>";
$date = date('H:i', time());
?>

    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
    <div>
        Способ1: <?= $date ?>
    </div>
    </body>
    </html>

<?php

require('date.php');
$content = file_get_contents('date.html');
$content = str_replace("{{ date }}", $date, $content);
echo $content;

echo "<br>------------6------------<br>";
function power($val, $pow)
{
    if ($pow == 1) {
        return $val;
    } else {
        return power($val, $pow - 1) * $val;
    }
}

echo power(7, 10);
?>