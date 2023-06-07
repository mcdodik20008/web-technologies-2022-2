<?php

function prepareParams($page, $action)
{

    switch ($page) {
        case 'index':
            $params['title'] = 'Главная';
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
            echo json_encode(getStoredCatalog(), JSON_UNESCAPED_UNICODE);
            die();

        case 'news':
            $params['title'] = 'Новости';
            $params['news'] = getNews();
            break;

        case 'onenews':
            $id = (int)$_GET['id'];
            $news = getOneNews($id);
            $params['title'] = $news['title'] . '. Новости нашего магазина';
            $params['news'] = getOneNews($id);
            break;

        case 'feedback':
            $params['title'] = 'feedback';
            $productId = (int) $_GET["product_id"];
            doFeedbackAction($action, $productId);
            break;

        case
        'catalog-page':
            $params['title'] = 'Каталог товаров для лабы';
            $params['catalog'] = getStoredCatalog();
            break;

        case 'catalog-details':
            $id = (int)$_GET['id'];
            $params['title'] = 'Детализация товара';
            $params['details'] = getStoredCatalogDetails($id);
            $params['feedbacks'] = getAllFeedbackByProductId($id);
            break;

        default:
            echo "404";
            die();
    }

    return $params;
}
