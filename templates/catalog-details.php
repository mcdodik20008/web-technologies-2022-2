<h2><?php echo $title ?></h2>
<?php

echo getHtml($details);

function getHtml(mixed $element): string
{
    return
        $element["name"] . "<br>"
        . '<img src="' . PHOTO . $element["imagePath"] . '" alt="Фото отсутствует" width="450"><br>'
        . "Стоимость: " . $element["price"] . "<br>"
        . "Описание: " . $element["desctiption"];
}

?>
<h2>Отзывы</h2>

<form action="/public/feedback/add/?product_id=<?php echo $details["id"] ?>" method="post">
    Оставьте отзыв: <br>
    <input type="text" name="name" placeholder="Ваше имя"><br>
    <input type="text" name="descriprion" placeholder="Ваш отзыв"><br>
    <input type="submit" value="Добавить">
</form>

<?php foreach ($feedbacks as $feedback): ?>
    <div>
        <form action="/public/feedback/save/?product_id=<?php echo $details["id"] ?>" method="post">
            <strong>Имя: <?= $feedback['name'] ?></strong>
            <br>
            <input type="hidden" name="id" value="<?= $feedback['id'] ?>">
            <input type="text" name="descriprion" placeholder="Ваш отзыв" value="<?= $feedback['descriprion'] ?>">
            <br>
            <input type="submit" value="Обновить">
        </form>
        <form action="/public/feedback/delete/?product_id=<?php echo $details["id"] ?>" method="post">
            <input type="hidden" name="id" value="<?= $feedback['id'] ?>">
            <input type="submit" value="Удалить">
        </form>
    </div>
<?php endforeach; ?>

