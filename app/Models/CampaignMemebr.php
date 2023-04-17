<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CampaignMemebr extends Model
{
    use HasFactory;

    protected $fillable = ['first_name', 'last_name', 'campaign_id'];

    public function campaign(): BelongsTo
    {
        return $this->belongsTo(Campaign::class);
    }
}
