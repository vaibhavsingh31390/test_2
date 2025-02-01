<?php

use App\Enum\RoutesConstants;
use App\Http\Controllers\Auth\v1\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1/users')->group(function () {
  Route::get(RoutesConstants::USER->value, [AuthController::class, 'currentUser'])->middleware('auth');
  Route::post(RoutesConstants::LOGIN->value, [AuthController::class, 'login']);
  Route::post(RoutesConstants::REGISTER->value, [AuthController::class, 'register']);
  Route::post(RoutesConstants::LOGOUT->value, [AuthController::class, 'logout']);
});
