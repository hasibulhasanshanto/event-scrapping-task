<?php

namespace App\Services;

use Exception;
use App\Models\Event;
use App\Models\EventReport;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Panther\Client;
use Symfony\Component\Panther\DomCrawler\Crawler;

class WebCrawlerService
{

    public function crawl(string $eventId)
    {
        $event  = Event::findOrFail($eventId);

        try {
            $client = Client::createChromeClient();
            $crawler = $client->request('GET', $event->url);
            $baseUrl = $this->getBaseUrl($event->url);
            $crawler = $client->waitFor('.news-row', 10);

            $elementsCount = $crawler->filter('.news-row')->count();
            Log::info("Found $elementsCount elements");

            // Extracting the first 5 article data
            $crawler->filter('.news-row')->slice(0, 5)->each(function ($node) use ($event, $baseUrl) {
                $this->processNode($node, $baseUrl, $event->id);
            });
            // $crawler->filter('.news-row')->reduce(function(Crawler $node, $i){
            //     return $i < 5;
            // })->each(fn(Crawler $node) => $this->processNode($node, $baseUrl, $event->id));

            $client->quit();
        } catch (Exception $e) {
            Log::error('Something went wrong, error: '. $e->getMessage());
        }
    }


    private function processNode($node, $baseUrl, $eventId)
    {
        try {
            $title = $node->filter('h5')->text();
            $description = $node->filter('.item-event-info p')->text();
            $date = $node->filter('.event-cl-date-bottom')->text();
            $relativeUrl = $node->filter('.event-item-title a')->attr('href');
            $link = $this->constructFullUrl($baseUrl, $relativeUrl);

            Log::info("Title: $title");
            Log::info("Description: $description");
            Log::info("Link: $link");

            EventReport::create([
                'event_id'     => $eventId,
                'created_by'   => 1,
                'title'        => $title,
                'description'  => $description,
                'processed_at' => null,
                'date'         => $date,
                'source_url'   => $link,
                'base_url'     => $baseUrl,
                "is_verified"  => false,
            ]);
        } catch (\Exception $e) {
            Log::error("Error processing node: " . $e->getMessage());
        }
    }

    private function getBaseUrl($url)
    {
        $parsedUrl = parse_url($url);
        return sprintf('%s://%s', $parsedUrl['scheme'], $parsedUrl['host']);
    }

    private function constructFullUrl($baseUrl, $relativeUrl)
    {
        // If the relative URL is actually a full URL, return it as is
        if (parse_url($relativeUrl, PHP_URL_SCHEME) != '') {
            return $relativeUrl;
        }
        // Otherwise, combine the base URL with the relative URL
        return rtrim($baseUrl, '/') . '/' . ltrim($relativeUrl, '/');
    }
}
