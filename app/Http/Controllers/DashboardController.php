<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\ClientEvent;
use App\Models\EventReport;

class DashboardController extends Controller
{
    public function index(){
        $total_user         = User::count();
        $total_events       = Event::count();
        $total_event_report = EventReport::count();
        $total_event_client = ClientEvent::count();
        return Inertia::render('Dashboard', [
            "data"=> [
                "total_user"         => $total_user,
                "total_events"       => $total_events,
                "total_event_report" => $total_event_report,
                "total_event_client" => $total_event_client,
            ]
        ]);
    }
}
