<?php

// Можно хранить изображения в формате BLOB в базе.
function getStoredCatalog()
{
    $sql = "SELECT * FROM catalog ORDER BY id DESC";
    return getAssocResult($sql);
}

// Можно хранить изображения в формате BLOB в базе.
function getStoredCatalogDetails($id)
{
    $sql = "SELECT * FROM catalog WHERE id = " . $id . " ORDER BY id DESC";
    if (count(getAssocResult($sql)) == 1) {

        return getAssocResult($sql)[0];
    } else {
        throw new \http\Exception\RuntimeException("Указан не верный идентификатор товара. id = " . $id);
    }
}