<?php

namespace App\Jobs;

use App\Models\Event;
use App\Models\EventReport;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Panther\Client;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class EventCrawler implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, Batchable;

        /**
     * Create a new job instance.
     */
    public function __construct(public $eventId)
    {
            //
    }

        /**
     * Execute the job.
     */
    public function handle(): void
    {
        $method = 'GET';
        $event  = Event::findOrFail($this->eventId);

        $validate_data = [
            'url'                => $event->url,
            'country'            => $event->country,
            'document'           => $event->document,
            'source_type'        => $event->source_type,
            'reference_selector' => $event->reference_selector,
        ];

        if(empty($validate_data)) return;

        $client = Client::createChromeClient();

        $client->request($method, $event->url);
        $client->clickLink('Getting started');

        $crawler = $client->waitFor($event->reference_selector, 10);

        $crawler = $client->waitForVisibility($event->reference_selector);

        $crawler->filter($validate_data)->text();

        $items = [];
        $this->storeDataToReport($items, $this->eventId);
        // Log::info('Event crawling successfully.');
    }

    public function storeDataToReport($items = [], $eventId){
        EventReport::where('event_id', $eventId)->delete();

        foreach($items as $item){
            EventReport::create([
                "event_id"     => $eventId,
                "created_by"   => auth()->id(),
                "title"        => $item->title,
                "description"  => $item->description,
                "date"         => $item->date,
                "processed_at" => $item->processed_at,
                "source_url"   => $item->source_url,
                "base_url"     => $item->base_url,
                "is_verified"  => $item->is_verified ? true : false,
                "report"       => $item->report,
                "updated_at"   => now(),
            ]);
        }
    }
}
