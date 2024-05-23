<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "user_id" => $this->user_id,
            "name" => $this->name,
            "url" => $this->url,
            "country" => $this->country,
            "document" => $this->document,
            "source_type" => $this->source_type,
            "reference_selector" => $this->reference_selector,
            "horizon_scanning" => $this->horizon_scanning,
            "source_container" => $this->source_container,
            "source_link" => $this->source_link,
            "source_title" => $this->source_title,
            "source_description" => $this->source_description,
            "source_date" => $this->source_date,
            "source_remove_text_from_date" => $this->source_remove_text_from_date,
            "source_date_format" => $this->source_date_format,
            "document_title" => $this->document_title,
            "document_description" => $this->document_description,
            "document_date" => $this->document_date,
            "document_date" => $this->document_date,
            "document_remove_text_from_date" => $this->document_remove_text_from_date,
            "document_date_format" => $this->document_date_format,
            "updated_at" => Carbon::parse($this->updated_at)->format('d-m-Y H:i A'),
        ];
    }
}
