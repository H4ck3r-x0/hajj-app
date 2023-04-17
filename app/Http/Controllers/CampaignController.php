<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Campaign;
use App\Imports\CampaignImport;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Requests\StoreCampaignRequest;
use App\Http\Requests\UpdateCampaignRequest;
use Illuminate\Http\Request;

class CampaignController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Campaign/Index', [
            'campaigns' => Campaign::paginate(50),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'file' => ['required', 'mimes:xlsx'],
        ]);

        if ($request->hasFile('file')) {
            Excel::queueImport(new CampaignImport, $request->file);
        }

        // return redirect('/')->with('success', 'All good!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Campaign $campaign)
    {
        return Inertia::render('Campaign/Show', [
            'campaign' => $campaign,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Campaign $campaign)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCampaignRequest $request, Campaign $campaign)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Campaign $campaign)
    {
        //
    }
}
