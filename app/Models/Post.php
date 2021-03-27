<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'content',
        'published_at',
        'author_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'published_at' => 'timestamp',
        'author_id' => 'integer',
    ];


    public function comments()
    {
        return $this->hasMany(\App\Models\Comment::class);
    }

    public function media()
    {
        return $this->belongsToMany(\App\Models\Media::class);
    }

    public function sites()
    {
        return $this->belongsToMany(\App\Models\Site::class);
    }

    public function author()
    {
        return $this->belongsTo(\App\Models\User::class);
    }
}
