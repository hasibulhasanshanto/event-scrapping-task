<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Event;
use App\Services\EventService;
use App\Http\Resources\EventResource;
use App\Http\Requests\EventFormRequest;

class EventController extends Controller
{
    /**
     * Construct property promotion
     */
    public function __construct(protected EventService $eventService)
    {
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = $this->eventService->paginateData();

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
        $this->eventService->storeData($validated);

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
        $this->eventService->updateData($validated, $event);

        return redirect()->route('events.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        $this->eventService->deleteData($event);
        return redirect()->route('events.index');
    }

    /**
     * Display the specified resource.
     */
    public function updateEnabled($id)
    {
        $this->eventService->enableUpdate($id);
        return redirect()->route('events.index');
    }
}
