<?php

namespace App\Services\Auth\v1;

use App\Models\User;
use App\Utils\ErrorClass;
use App\Utils\ResponseClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthService
{

  protected $request;
  protected $jwtAuth;
  public function __construct(Request $request, JWTAuth $jwtAuth)
  {
    $this->request = $request;
    $this->jwtAuth  = $jwtAuth;
  }

  public function register(): ResponseClass|ErrorClass
  {
    try {

      $validator = Validator::make($this->request->all(), [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:6|confirmed',
      ]);

      if ($validator->fails()) {
        return new ErrorClass($validator->errors()->first(), 400, $validator->errors());
      }
      $user = User::create([
        'name' => $this->request->get('name'),
        'email' => $this->request->get('email'),
        'password' => Hash::make($this->request->get('password')),
      ]);
      $token = $this->jwtAuth::fromUser($user);
      return new ResponseClass('Registration successful.', 200, [
        "user" => $user,
        "token" => $token,
      ]);
    } catch (ErrorClass $th) {
      return new ErrorClass($th->getMessage(), 500);
    }
  }

  public function login(): ResponseClass|ErrorClass
  {
    try {
      $validator = Validator::make($this->request->all(), [
        'email' => 'required|string|email',
        'password' => 'required|string|min:6',
      ]);

      if ($validator->fails()) {
        return new ErrorClass($validator->errors()->first(), 400, $validator->errors());
      }
      $credentials = $this->request->only('email', 'password');
      if (!$token = $this->jwtAuth::attempt($credentials)) {
        return  new ErrorClass('Please check your credentials.', 500);
      }
      $user = $this->jwtAuth::user();
      return new ResponseClass('login successful.', 200, ["token" => $token, "user" => $user]);
    } catch (ErrorClass $th) {
      return new ErrorClass($th->getMessage(), 500);
    }
  }

  public function getCurrentUser(): ResponseClass|ErrorClass
  {
    try {
      $user = $this->jwtAuth::parseToken()->authenticate();
      return new ResponseClass('Current user retrieved.', 200, ["user" => $user,]);
    } catch (ErrorClass $th) {
      return new ErrorClass($th->getMessage(), 500);
    }
  }

  public function logout(): ResponseClass|ErrorClass
  {
    try {
      $this->jwtAuth::invalidate($this->jwtAuth::getToken());
      return new ResponseClass('Logout successful.', 200, []);
    } catch (ErrorClass $th) {
      return new ErrorClass($th->getMessage(), 500);
    }
  }
}
