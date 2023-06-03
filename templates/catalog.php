<h2><?php echo $title; ?></h2>

<div>
    <?php foreach ($catalog as $item): ?>
        <div>
            <?=$item['name']?><br>
            <img src="/public/img/<?=$item['image']?>" alt="" width="100"><br>
            Цена: <?=$item['price']?><br>
            <button>Купить</button>
            <hr>
        </div>
    <?php endforeach; ?>

</div>
