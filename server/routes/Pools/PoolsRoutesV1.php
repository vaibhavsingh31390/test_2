<?php

use App\Enum\RoutesConstants;
use App\Http\Controllers\Pools\v1\PoolsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1/pool')->middleware('auth')->group(function () {
  Route::get(RoutesConstants::LIST_USERS_POOL->value, [PoolsController::class, 'getAllPoolsExceptCurrentUser']);
  Route::get(RoutesConstants::LIST_POOL->value, [PoolsController::class, 'getPoolsByUser']);
  Route::put(RoutesConstants::UPDATE_POOL->value, [PoolsController::class, 'updatePool']);
  Route::post(RoutesConstants::CREATE_POOL->value, [PoolsController::class, 'createPool']);
  Route::post(RoutesConstants::VOTE_POOL->value, [PoolsController::class, 'createPool']);
});
