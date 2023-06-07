<?php

function getAllFeedbackByProductId($productId)
{
    $sql = "SELECT * FROM feedback WHERE product_id = " . $productId . " ORDER BY id DESC";
    return getAssocResult($sql);
}

function add($productId)
{
    extract($_POST);
    $sql = "INSERT INTO feedback (name, descriprion, product_id) VALUES('{$name}','{$descriprion}' ,'{$productId}')";
    executeSql($sql);
}

function update()
{
    extract($_POST);
    $sql = "UPDATE feedback SET descriprion = '{$descriprion}' WHERE id =" . $id;
    executeSql($sql);
}

function delete()
{
    extract($_POST);
    $sql = "DELETE FROM feedback WHERE id = " . $id;
    executeSql($sql);
}

function doFeedbackAction($action, $productId)
{
    echo $productId;
    switch ($action) {
        case 'add':
            add($productId);
            break;
        case 'save':
            update();
            break;
        case 'delete':
            delete();
            break;
    }
    header("location:http://lesson19/public/catalog-details/?id=" . $productId);
}
