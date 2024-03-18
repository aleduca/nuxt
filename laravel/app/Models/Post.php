<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Attributes\SearchUsingFullText;
use Laravel\Scout\Searchable;

class Post extends Model
{
  use HasFactory, Searchable;

  #[SearchUsingFullText('content')]
  public function toSearchableArray()
  {
    return [
      'title' => $this->name,
      'content' => $this->content,
    ];
  }
}
