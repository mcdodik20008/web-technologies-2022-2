<?php

echo "<br>------------1------------<br>";

$n = 3;
do {
    if ($n == 0)
        echo "0 – это ноль.";
    elseif ($n % 2 == 1)
        echo $n." - нечётное число.";
    else
        echo $n." - чётное число.";
    echo"<br>";
} while ($n++ < 10);

echo "<br>------------2------------<br>";

$m = array("Москва", "Зеленоград", "Клин");
$l = array("Санкт-Петербург", "Всеволожск", "Павловск", "Кронштадт");
$map = array("Московская область" => $m, "Ленинградская область" => $l);

foreach ($map as $key => $val){
    echo $key.":"."<br>";
    echo implode(", ", $val).".<br>";
}

echo "<br>------------3------------<br>";

$converter = array(
    'а' => 'a',    'б' => 'b',    'в' => 'v',    'г' => 'g',    'д' => 'd',
    'е' => 'e',    'ё' => 'e',    'ж' => 'zh',   'з' => 'z',    'и' => 'i',
    'й' => 'y',    'к' => 'k',    'л' => 'l',    'м' => 'm',    'н' => 'n',
    'о' => 'o',    'п' => 'p',    'р' => 'r',    'с' => 's',    'т' => 't',
    'у' => 'u',    'ф' => 'f',    'х' => 'h',    'ц' => 'c',    'ч' => 'ch',
    'ш' => 'sh',   'щ' => 'sch',  'ь' => '',     'ы' => 'y',    'ъ' => '',
    'э' => 'e',    'ю' => 'yu',   'я' => 'ya'
);

function str_split_unicode($str, $l = 0): array|bool
{
    if ($l > 0) {
        $ret = array();
        $len = mb_strlen($str, "UTF-8");
        for ($i = 0; $i < $len; $i += $l) {
            $ret[] = mb_substr($str, $i, $l, "UTF-8");
        }
        return $ret;
    }
    return preg_split("//u", $str, -1, PREG_SPLIT_NO_EMPTY);
}

function translate($str, $converter): string
{
    $result = "";
    foreach (str_split_unicode($str) as $symbol) {
        if (array_key_exists($symbol, $converter)) {
                $result .= $converter[$symbol];
        }
        else {
            $result .= $symbol;
        }
    }

    return $result;
}

echo translate("привет, как дела?", $converter);

echo "<br>------------4------------<br>";

$menu = [
    [
        'title' => 'Меню1',
    ],
    [
        'title' => 'Меню2',
    ],
    [
        'title' => 'Меню3',
        'children' => [
            [
                'title' => 'Подменю1',
                'children' => [
                    [
                        'title' => 'ПодПодменю1',
                    ],
                    [
                        'title' => 'ПодПодменю2',
                    ]
                ]
            ],
            [
                'title' => 'Подменю2',
            ]
        ]
    ]
];

function renderMenu($menu): string
{
    $res = '<ul>';
    foreach ($menu as $value) {
        if(array_key_exists('children', $value)) {
            $res .= "<li>";
            $res .= $value['title'];
            $res .= renderMenu($value['children']) . "</li>";
        } else {
            $res .= "<li>{$value['title']}</li>";
        }
    }
    return $res . "</ul>";
}
echo renderMenu($menu);