<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Campaign;
use Illuminate\Http\Request;
use App\Models\CampaignMemebr;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\CampaignMemebrImport;
use App\Http\Requests\UpdateCampaignMemebrRequest;

class CampaignMemebrController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Campaign $campaign)
    {
        $request->validate([
            'file' => ['required', 'mimes:xlsx'],
        ]);

        if ($request->hasFile('file')) {
            Excel::queueImport(new CampaignMemebrImport($campaign), $request->file);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Campaign $campaign)
    {
        return Inertia::render('Campaign/Show', [
            'campaign' => $campaign,
            'members' => $campaign->members()->paginate(1),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function showDetails(CampaignMemebr $campaignMemebr)
    {
        return Inertia::render('Campaign/Members/ShowDetails', [
            'campaignMemebr' => $campaignMemebr->load('campaign')
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CampaignMemebr $campaignMemebr)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCampaignMemebrRequest $request, CampaignMemebr $campaignMemebr)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CampaignMemebr $campaignMemebr)
    {
        //
    }
}
