<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Event;
use Illuminate\Http\Request;
use App\Http\Resources\EventResource;
use App\Http\Requests\EventFormRequest;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Event::query();
        if (request("search")) {
            $query->where("name", "like", "%" . request("search") . "%");
            // $query->OrWhere("country", "like", "%" . request("search") . "%");
        }
        $events = $query->orderBy('id', 'desc')->paginate(10)->onEachSide(1);

        return Inertia::render('Event/Index', [
            'events' => EventResource::collection($events),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Event/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EventFormRequest $request)
    {
        $validated = $request->validated();
        $uid = User::whereRole('client')->inRandomOrder()->first()->id;
        $validated['user_id'] = $uid;
        Event::create($validated);
        return redirect()->route('events.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        return Inertia::render('Event/Edit', [
            'event' => new EventResource($event),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EventFormRequest $request, Event $event)
    {
        $validated = $request->validated();
        $event->update($validated);
        return redirect()->route('events.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        $event->delete();
        return redirect()->route('events.index');
    }

    /**
     * Display the specified resource.
     */
    public function updateEnabled($id)
    {
        $event = Event::whereId($id)->first();
        $event->horizon_scanning = $event->horizon_scanning ? false : true;
        $event->save();

        return redirect()->route('events.index');
    }
}
