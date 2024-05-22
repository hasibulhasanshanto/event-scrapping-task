<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EventReport extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'event_id',
        'title',
        'description',
        'date',
        'processed_at',
        'source_url',
        'base_url',
        'is_verified',
        'report',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'report' => 'array',
        ];
    }


    /**
     * Get the event that owns event report.
     */
    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class);
    }
}
