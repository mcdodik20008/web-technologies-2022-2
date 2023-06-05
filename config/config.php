<?php
const TEMPLATES_DIR = '../templates/';
const LAYOUTS_DIR = 'layouts/';

/* DB config */
const HOST = '127.0.0.1';
const USER = 'root';
const PASS = '';
const DB = 'webis';

include "../engine/db.php";
include "../engine/function.php";
include "../engine/catalog.php";
include "../engine/menu.php";
include "../engine/news.php";
include "../engine/mymenu.php";