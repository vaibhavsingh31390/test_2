<?php

namespace App\Http\Controllers\Config\v1;

use App\Http\Controllers\Controller;
use App\Services\Config\v1\ConfigService;

class ConfigController extends Controller
{
  protected $configService;

  public function __construct(ConfigService $configService)
  {
    $this->configService = $configService;
  }

  public function setConfig()
  {
    $response = $this->configService->setConfig();
    return $response->sendJsonResponse();
  }

  public function updateConfig()
  {
    $response = $this->configService->updateConfig();
    return $response->sendJsonResponse();
  }

  public function fetchConfig()
  {
    $response = $this->configService->fetchConfig();
    return $response->sendJsonResponse();
  }
}
