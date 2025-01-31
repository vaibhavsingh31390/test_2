<?php

use App\Enum\RoutesConstants;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1/pool')->middleware('auth')->group(function () {
  Route::get(RoutesConstants::LIST_POOL->value, function (Request $request) {});
  Route::post(RoutesConstants::CREATE_POOL->value, function () {});
  Route::put(RoutesConstants::UPDATE_POOL->value, function (Request $request) {});
  Route::post(RoutesConstants::VOTE_POOL->value, function (Request $request) {});
});
