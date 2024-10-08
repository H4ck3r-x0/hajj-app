<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HajData extends Model
{
    use HasFactory;

    protected $fillable = ['first_name', 'last_name', 'campaign_id'];

    public function campaign(): bleongsTo
    {
        return $this->belongsTo(Campaign::class);
    }
}
