<?php

namespace App\Services\Pools\v1;

use App\Models\Pools;
use App\Utils\ErrorClass;
use App\Utils\ResponseClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class PoolService
{
  protected $request;

  public function __construct(Request $request, JWTAuth $jwtAuth)
  {
    $this->request = $request;
  }

  public function createPool(): ResponseClass|ErrorClass
  {
    try {
      $validator = Validator::make($this->request->all(), [
        'title' => 'required|string|max:255',
        'desc' => 'required|string|max:255',
        'options' => 'required|array',
        'max_attempts' => 'required|integer|min:3',
      ]);

      if ($validator->fails()) {
        return new ErrorClass($validator->errors()->first(), 400, $validator->errors());
      }

      $user = session('user');
      $expirationTime = now()->addMinutes(env('POOL_EXPIRE_MINUTES', 60));
      $pool = Pools::create([
        'user_id' => $user->id,
        'title' => $this->request->get('title'),
        'desc' => $this->request->get('desc'),
        'options' => $this->request->get('options'),
        'max_attempts' => $this->request->get('max_attempts'),
        'expires_at' => $expirationTime,
      ]);

      return new ResponseClass('Pool created successfully.', 200, [
        "pool" => $pool,
      ]);
    } catch (ErrorClass $th) {
      return new ErrorClass($th->getMessage(), 500);
    }
  }

  public function updatePool($poolId): ResponseClass|ErrorClass
  {
    try {
      $validator = Validator::make($this->request->all(), [
        'title' => 'sometimes|string|max:255',
        'desc' => 'sometimes|string|max:255',
        'options' => 'sometimes|array',
        'max_attempts' => 'sometimes|integer|min:3',
      ]);

      if ($validator->fails()) {
        return new ErrorClass($validator->errors()->first(), 400, $validator->errors());
      }

      $user = session('user');
      $pool = Pools::where('id', $poolId)->where('user_id', $user->id)->first();

      if (!$pool) {
        return new ErrorClass('Pool not found or you do not have permission to update it.', 404);
      }

      $pool->update($this->request->only(['title', 'desc', 'options', 'max_attempts']));

      return new ResponseClass('Pool updated successfully.', 200, [
        "pool" => $pool,
      ]);
    } catch (ErrorClass $th) {
      return new ErrorClass($th->getMessage(), 500);
    }
  }

  public function deletePool($poolId): ResponseClass|ErrorClass
  {
    try {
      $user = session('user');
      $pool = Pools::where('id', $poolId)->where('user_id', $user->id)->first();

      if (!$pool) {
        return new ErrorClass('Pool not found or you do not have permission to delete it.', 404);
      }

      $pool->delete();

      return new ResponseClass('Pool deleted successfully.', 200);
    } catch (ErrorClass $th) {
      return new ErrorClass($th->getMessage(), 500);
    }
  }

  public function getPoolsByUser(): ResponseClass|ErrorClass
  {
    try {
      $user = session('user');
      $pools = Pools::where('user_id', $user->id)->get();

      return new ResponseClass('Pools fetched successfully.', 200, [
        "pools" => $pools,
      ]);
    } catch (ErrorClass $th) {
      return new ErrorClass($th->getMessage(), 500);
    }
  }

  public function getAllPoolsExceptCurrentUser(): ResponseClass|ErrorClass
  {
    try {
      $user = session('user');
      $pools = Pools::where('user_id', '!=', $user->id)->get();

      return new ResponseClass('Pools fetched successfully.', 200, [
        "pools" => $pools,
      ]);
    } catch (ErrorClass $th) {
      return new ErrorClass($th->getMessage(), 500);
    }
  }
}
