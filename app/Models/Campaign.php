<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Campaign extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'main_mobile', 'emergency_mobile', 'location_google_url', 'active'];


    public function hajDatas(): HasMany
    {
        return $this->hasMany(HajData::class);
    }
}
