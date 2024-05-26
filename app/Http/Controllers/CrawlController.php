<?php

namespace App\Http\Controllers;

use Throwable;
use App\Models\Event;
use Illuminate\Bus\Batch;
use App\Jobs\EventCrawler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Log;

class CrawlController extends Controller
{
    public function checkSelector()
    {
        // EventCrawler::dispatch();

        $batch = Bus::batch([
            new EventCrawler(),
        ])->then(function (Batch $batch) {
            Log::info('Success', $batch);
        })->catch(function (Batch $batch, Throwable $e) {
            Log::error('Event creation went wrong'. $e);
        })->dispatch();

        return "Job in progress, id: " . $batch->id;
    }

    public function observeBatch($batchId)
    {
        $batch = Bus::findBatch($batchId);
        // $batch->progress();
        dd($batch);
    }
}
