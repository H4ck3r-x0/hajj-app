<?php

namespace App\Imports;

use App\Models\CampaignMemebr;
use Illuminate\Support\Collection;
use Illuminate\Contracts\Queue\ShouldQueue;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;

class CampaignMemebrImport implements
    ToCollection,
    WithHeadingRow,
    WithBatchInserts,
    WithChunkReading,
    ShouldQueue
{

    public $campaign;

    public function  __construct($campaign)
    {
        $this->campaign = $campaign;
    }

    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            $campaignMember = CampaignMemebr::create([
                'first_name' => $row['الاسم الاول'],
                'last_name' => $row['الاسم الثاني'],
                'nationality' => $row['الجنسية'],
                'campaign_id' => $this->campaign->id
            ]);

            $campaignMember->qr_code = QrCode::format('svg')
                ->generate(route('campaign.member.showDetails', $campaignMember->id));

            $campaignMember->save();
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
