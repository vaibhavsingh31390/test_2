<?php

namespace App\Services\Config\v1;

use App\Models\AppConfig;
use App\Utils\ErrorClass;
use App\Utils\ResponseClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ConfigService
{
  protected $request;

  public function __construct(Request $request)
  {
    $this->request = $request;
  }

  public function setConfig(): ResponseClass|ErrorClass
  {
    try {
      $data = $this->request->only(['key', 'value']);
      $config = AppConfig::create($data);

      return new ResponseClass('Config set successfully.', 200, $config);
    } catch (\Exception $e) {
      return new ErrorClass($e->getMessage(), 500);
    }
  }

  public function updateConfig(): ResponseClass|ErrorClass
  {
    try {
      $data = $this->request->only(['key', 'value']);
      $config = AppConfig::where('key', $data['key'])->first();

      if ($config) {
        $config->update($data);
        return new ResponseClass('Config updated successfully.', 200, $config);
      } else {
        return new ErrorClass('Config not found.', 404);
      }
    } catch (\Exception $e) {
      return new ErrorClass($e->getMessage(), 500);
    }
  }

  public function fetchConfig(): ResponseClass|ErrorClass
  {
    try {
      $configs = Cache::get(AppConfig::CACHE_KEY);
      if (!empty($configs)) {
        $configs = AppConfig::all();
      }
      Cache::put(AppConfig::CACHE_KEY, $configs, AppConfig::CACHE_TTL);
      return new ResponseClass('Configs fetched successfully.', 200, $configs);
    } catch (\Exception $e) {
      return new ErrorClass($e->getMessage(), 500);
    }
  }
}
