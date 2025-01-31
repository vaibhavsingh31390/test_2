<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pools extends Model
{
  use HasFactory;

  protected $fillable = [
    'user_id',
    'title',
    'desc',
    'options',
    'max_attempts',
    'expires_at',
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
