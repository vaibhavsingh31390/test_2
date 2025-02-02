<?php

use App\Enum\RoutesConstants;
use App\Http\Controllers\Config\v1\ConfigController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1/config')->middleware('auth')->group(function () {
  Route::get(RoutesConstants::FETCH_CONFIG->value, [ConfigController::class, 'fetchConfig']);
  Route::post(RoutesConstants::ADD_CONFIG->value, [ConfigController::class, 'setConfig']);
  Route::put(RoutesConstants::UPDATE_CONFIG->value, [ConfigController::class, 'updateConfig']);
});
