<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;

class AppConfig extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'key',
        'value',
    ];

    protected function casts(): array
    {
        return [
            'value' => 'array',
        ];
    }

    const CACHE_KEY = 'app_config';
    const CACHE_TTL = 3600;

    protected static function booted()
    {
        parent::booted();

        static::saved(function ($config) {
            self::clearConfigCache();
        });

        static::deleted(function ($config) {
            self::clearConfigCache();
        });
    }

    protected static function clearConfigCache()
    {
        Cache::forget(self::CACHE_KEY);
    }
}
