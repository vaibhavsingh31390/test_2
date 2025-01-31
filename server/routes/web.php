<?php

use App\Utils\ResponseClass;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return (new ResponseClass('Application is running.', 200))->sendJsonResponse();
});
