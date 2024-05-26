<?php

namespace App\Jobs;

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
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $client = Client::createChromeClient();
        // $client = Client::createFirefoxClient();

        $client->request('GET', 'https://api-platform.com');
        // $client->clickLink('Getting started');

        // Wait for an element to be present in the DOM (even if hidden)
        $crawler = $client->waitFor('#installing-the-framework');
        // Alternatively, wait for an element to be visible
        $crawler = $client->waitForVisibility('#installing-the-framework');

        $crawler->filter('#installing-the-framework')->text();
        $client->takeScreenshot('screen.png');

        Log::info('Event crawling successfully.');
    }
}
