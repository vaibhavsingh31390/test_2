<?php


namespace App\Http\Controllers\Auth\v1;

use App\Http\Controllers\Controller;
use App\Services\Auth\v1\AuthService;

class AuthController extends Controller
{
  protected $authService;

  public function __construct(AuthService $authService)
  {
    $this->authService = $authService;
  }

  public function Register()
  {
    $response = $this->authService->register();
    return $response->sendJsonResponse();
  }

  public function Login()
  {
    $response = $this->authService->login();
    return $response->sendJsonResponse();
  }

  public function currentUser()
  {
    $response = $this->authService->getCurrentUser();
    return $response->sendJsonResponse();
  }

  public function logout()
  {
    $response = $this->authService->logout();
    return $response->sendJsonResponse();
  }
}
