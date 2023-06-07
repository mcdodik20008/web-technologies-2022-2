<h2><?php echo $title ?></h2>

<div>
    <?php

    foreach ($catalog as $element) {
        echo getcwd() . "<br>";
        echo PHOTO . $element["imagePath"] . "<br>";
        echo getHtml($element);
    }

    function getHtml(mixed $element): string
    {
        return
            "<a href=\"http://lesson19/public/catalog-details/?id=" . $element["id"] . "\">"
            . $element["name"] . "<br>"
            . "<img src=\"" . PHOTO . $element["imagePath"] . "\" alt=\"Фото отсутствует\" width=\"200\"><br>"
            . "Стоимость: " . $element["price"] . "<br>"
            . "</a>"
            . "<hr>";
    }

    ?>

</div>
