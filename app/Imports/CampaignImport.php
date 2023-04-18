<?php

namespace App\Imports;

use App\Models\Campaign;
use Illuminate\Support\Collection;
use Illuminate\Contracts\Queue\ShouldQueue;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;

class CampaignImport implements
    ToCollection,
    WithHeadingRow,
    WithBatchInserts,
    WithChunkReading,
    ShouldQueue
{

    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            $campaign = Campaign::create([
                'name' => $row['اسم الحملة'],
                'manager_name' => $row['اسم المسؤول'],
                'main_mobile' => $row['الرقم الرئيسي'],
                'emergency_mobile' => $row['رقم الطوارئ'],
                'location_google_url' => $row['العنوان'],
                'campaign_number' => $row['رقم الحملة']
            ]);

            $campaign->qr_code = QrCode::format('svg')
                ->generate(route('campaign.show', $campaign->id));
            $campaign->save();
        }
    }

    public function batchSize(): int
    {
        return 100;
    }

    public function chunkSize(): int
    {
        return 100;
    }
}
