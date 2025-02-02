<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pools extends Model
{
  use HasFactory, SoftDeletes;

  protected $fillable = [
    'user_id',
    'title',
    'desc',
    'options',
    'max_attempts',
    'expires_at',
  ];

  protected $casts = [
    "options" => 'array',
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }
  public function votes()
  {
    return $this->hasMany(Votes::class);
  }
}
