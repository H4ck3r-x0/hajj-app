<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Campaign extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'manager_name',
        'main_mobile',
        'emergency_mobile',
        'location_google_url',
        'qr_code',
        'campaign_number',
    ];

    public function members(): HasMany
    {
        return $this->hasMany(CampaignMemebr::class);
    }
}
