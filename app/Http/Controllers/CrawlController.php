<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Panther\Client;

class CrawlController extends Controller
{
    public function getCrawl(Request $request)
    {
        $client = Client::createChromeClient();

        // $client = Client::createFirefoxClient();

        $client->request('GET', 'https://api-platform.com');
        $client->clickLink('Getting started');

        // Wait for an element to be present in the DOM (even if hidden)
        $crawler = $client->waitFor('#installing-the-framework');
        // Alternatively, wait for an element to be visible
        $crawler = $client->waitForVisibility('#installing-the-framework');

        $crawler->filter('#installing-the-framework')->text();
        $client->takeScreenshot('screen.png');

        dd($crawler);
    }
}
