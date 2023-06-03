<?php
function getPhotos($dir): array
{
    $photos = [];
    foreach (array_slice(scandir($dir), 2) as $photo) {
        if (str_starts_with($photo, 'small')) {
            $photos[] = ['photo' => $photo];
        }
    }
    return $photos;
}
