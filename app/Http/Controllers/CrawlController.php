<?php

namespace App\Http\Controllers;

use Throwable;
use Illuminate\Bus\Batch;
use App\Jobs\EventCrawler;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Log;

class CrawlController extends Controller
{
    public function checkSelector(string $eventId): JsonResponse
    {
        // EventCrawler::dispatch();
        $batch = Bus::batch([
            new EventCrawler($eventId),
        ])->then(function (Batch $batch) {
            return true;
        })->catch(function (Batch $batch, Throwable $e) {
            return false;
        })->dispatch();

        return response()->json(['success' => 'Event added to job', 'batchId' => $batch->id]);
    }

    public function observeBatch(string $batchId): JsonResponse
    {
        $batch = Bus::findBatch($batchId);
        return response()->json(['success' => 'Getting job batch data', 'batch' => $batch, 'progress' => $batch->progress()]);
    }
}
