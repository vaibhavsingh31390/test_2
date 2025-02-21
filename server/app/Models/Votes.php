<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Votes extends Model
{
  use HasFactory, SoftDeletes;

  protected $fillable = [
    'user_id',
    'pool_id',
    'option',
    'attempts_left',
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }
  public function votes()
  {
    return $this->belongsTo(Pools::class);
  }
}
