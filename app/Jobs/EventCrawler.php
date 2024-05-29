<?php

namespace App\Jobs;

use App\Models\Event;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use App\Services\WebCrawlerService;
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
    public function __construct(public string $eventId)
    {
        //
    }

        /**
     * Execute the job.
     */
    public function handle(WebCrawlerService $crawlerService)
    {
        $crawlerService->crawl($this->eventId);
    }
}
