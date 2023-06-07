<?php
const TEMPLATES_DIR = '../templates/';
const LAYOUTS_DIR = 'layouts/';
const PHOTO = '/public/photo/';

/* DB config */
const HOST = 'localhost';
const USER = 'root';
const PASS = '';
const DB = 'catalog';

include "../engine/db.php";
include "../engine/controller.php";
include "../engine/render.php";
include "../models/catalog.php";
include "../models/menu.php";
include "../models/news.php";
include "../models/feedback.php";
include "../models/catalog-my.php";
