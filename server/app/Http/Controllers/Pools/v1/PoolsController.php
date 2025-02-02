<?php

namespace App\Http\Controllers\Pools\v1;

use App\Http\Controllers\Controller;
use App\Services\Pools\v1\PoolService;

class PoolsController extends Controller
{
  protected $poolService;

  public function __construct(PoolService $poolService)
  {
    $this->poolService = $poolService;
  }

  public function createPool()
  {
    $response = $this->poolService->createPool();
    return $response->sendJsonResponse();
  }

  public function updatePool($poolId)
  {
    $response = $this->poolService->updatePool($poolId);
    return $response->sendJsonResponse();
  }

  public function deletePool($poolId)
  {
    $response = $this->poolService->deletePool($poolId);
    return $response->sendJsonResponse();
  }

  public function getPoolsByUser()
  {
    $response = $this->poolService->getPoolsByUser();
    return $response->sendJsonResponse();
  }

  public function getAllPoolsExceptCurrentUser()
  {
    $response = $this->poolService->getAllPoolsExceptCurrentUser();
    return $response->sendJsonResponse();
  }
}
