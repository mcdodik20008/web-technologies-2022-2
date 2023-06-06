<?php
include '../config/config.php';

//$page = 'index';
//if (isset($_GET['page'])) {
//    $page = $_GET['page'];
//}

$url_array = explode('/', $_SERVER['REQUEST_URI']);
if ($url_array[2] == "") {
    $page = 'index';
} else {
    $page = $url_array[2];
}
$params = [];

switch ($page) {
    case 'index':
        $params['title'] = 'Главная';
        break;

    case 'mymenu':
        $params['title'] = 'Моё меню';
        $params['mymenu'] = getAllMyMenu();
        break;

    case 'catalog':
        $params['title'] = 'Каталог';
        $params['catalog'] = getCatalog();
        break;

    case 'about':
        $params['title'] = 'about';
        $params['phone'] = 444333;
        break;

    case 'gallery':
        $params['title'] = 'Галерея';
        break;

    case 'apicatalog':
        echo json_encode(getCatalog(), JSON_UNESCAPED_UNICODE);
        die();

    case 'news':
        $params['title'] = 'Новости';
        $params['news'] = getNews();
        break;

    case 'onenews':
        $id = (int)$_GET['id'];
        $news = getOneNews($id);
        $params['title'] = 'Новости магазина  ' . $news['title'];
        $params['news'] = $news;
        break;

    default:
        echo "404";
        die();
}

echo render($page, $params);



//$page = 'index';
//
//$params = [
//    'test' => 'test',
//    'title' => 'Главная',
//    'phone' => '+7 495 12-23-12'
//];

//echo renderTemplate('index', $params);

//echo renderTemplate(LAYOUTS_DIR . 'main', [
//    'title' => $params['title'],
//    'menu' => renderTemplate('menu'),
//    'content' => renderTemplate($page, $params)
//]);
