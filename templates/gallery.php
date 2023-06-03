<h2><?php

    echo $title; ?></h2>

<?php

use \Gumlet\ImageResize;

if ($_FILES && $_FILES["filename"]["error"] == UPLOAD_ERR_OK) {
    $file = $_FILES["filename"];
    $name = $_FILES["filename"]["name"];

    if ($file["size"] > 7 * pow(2, 20)) {
        echo "Ошибка. Размер файла должен быть меньше 7Мб";
        return;
    }

    if (str_contains($file['type'], 'jpeg') && str_contains($file['type'], 'png')) {
        echo "Ошибка. Файл не является картинкой";
        return;
    }

    $filePath = PHOTOS_DIR . '/' . $name;
    if (move_uploaded_file($file["tmp_name"], $filePath)) {
        try {
            $image = new ImageResize($filePath);
            $image->resizeToWidth(300);
            $image->save(PHOTOS_DIR . "/small" . $file['name']);

            $image = new ImageResize($filePath);
            $image->resizeToWidth(600);
            $image->save($filePath);
        } catch (\Gumlet\ImageResizeException $e) {
            echo $e;
        }
        echo "Файл загружен";
    } else {
        echo "Ошибка загрузки файла";
    }
    header("Refresh: 2");
}
?>

<form method="post" enctype="multipart/form-data">
    Выберите файл: <input type="file" name="filename" size="10"/><br/><br/>
    <input type="submit" value="Загрузить"/>
    <br>
    <br>
</form>


<div>

    <div>
        <?php foreach ($photos as $photo):
            $photoSmallPath = PHOTOS_DIR . "/" . $photo['photo'];
            $photoPath = PHOTOS_DIR . "/" . mb_substr($photo['photo'], 5)
            ?>
            <div>
                <a href="<?= $photoPath ?>" target="_blank">
                    <img src="<?= $photoSmallPath ?>" alt="" width="200">
                    <br>
                    <hr>
                </a>
            </div>
        <?php endforeach; ?>

    </div>
</div>