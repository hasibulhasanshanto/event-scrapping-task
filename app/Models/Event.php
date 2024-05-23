<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Event extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'name',
        'url',
        'country',
        'document',
        'source_type',
        'reference_selector',
        'horizon_scanning',
        'source_container',
        'source_link',
        'source_title',
        'source_description',
        'source_date',
        'source_remove_text_from_date',
        'source_date_format',
        'document_title',
        'document_description',
        'document_date',
        'document_remove_text_from_date',
        'document_date_format'
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'updated_at' => 'datetime',
        ];
    }

    /**
     * Get the user that owns event.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the event reports of event.
     */
    public function eventReports(): HasMany
    {
        return $this->hasMany(EventReport::class);
    }
}
