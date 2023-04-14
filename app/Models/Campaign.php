<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
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
        'active'
    ];


    // public static function boot()
    // {
    //     parent::boot();
    //     static::creating(function (Campaign $campaign) {
    //         $campaign->qr_code = QrCode::format('png')->size(300)->generate($campaign->id);

    //         dd(QrCode::format('png')->size(300)->generate($campaign->id));
    //     });
    // }

    public function hajDatas(): HasMany
    {
        return $this->hasMany(HajData::class);
    }
}
