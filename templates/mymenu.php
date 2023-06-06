<h2><?php $title ?></h2>

<div class="list-items" id="list-items">

    <?php
    foreach ($mymenu as $node) {
        echo getHtml($node);
    }


    function getHtml($parent): string
    {
        $html = "
                <div class='list-item list-item_open' data-parent>
                    <div class='list-item__inner'>
                        <img class='list-item__arrow' src='img/chevron-down.png' alt='chevron-down' data-open>
                        <img class='list-item__folder' src='img/folder.png' alt='folder''>
                        <span class='list-item__name'>
                            {$parent['name']}
                        </span>
                    </div>
            ";
        if (array_key_exists("childs", $parent)) {
            if (count($parent['childs']) > 0) {
                for ($i = 0; $i < count($parent['childs']); $i++) {
                    $html .= "<div class='list-item__items'>" . getHtml($parent['childs'][$i]) . "</div>";
                }
            }
        }
        return $html." </div>";
    }

    ?>
</div>

<script>
    const parents = document.getElementById('list-items').querySelectorAll('[data-parent]');

    parents.forEach(parent => {
        const open = parent.querySelector('[data-open]');
        open.addEventListener('click', () => parent.classList.toggle('list-item_open'));
    });
</script>