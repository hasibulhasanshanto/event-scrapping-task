<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventFormRequest extends FormRequest
{
      /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

      /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'                           => ['required', 'string', 'max:255'],
            'url'                            => ['required', 'string', 'max:255'],
            'country'                        => ['required', 'string', 'max:255'],
            'document'                       => ['required', 'string', 'max:255'],
            'source_type'                    => ['required', 'string', 'max:255'],
            'reference_selector'             => ['nullable', 'string', 'max:255'],
            'horizon_scanning'               => ['required', 'boolean'],
            'source_container'               => ['required', 'string', 'max:255'],
            'source_link'                    => ['required', 'string', 'max:255'],
            'source_title'                   => ['required', 'string', 'max:255'],
            'source_description'             => ['nullable', 'string', 'max:255'],
            'source_date'                    => ['nullable', 'string', 'max:255'],
            'source_remove_text_from_date'   => ['nullable', 'string', 'max:255'],
            'source_date_format'             => ['nullable', 'string', 'max:255'],
            'document_title'                 => ['nullable', 'string', 'max:255'],
            'document_description'           => ['nullable', 'string', 'max:255'],
            'document_date'                  => ['nullable', 'string', 'max:255'],
            'document_remove_text_from_date' => ['nullable', 'string', 'max:255'],
            'document_date_format'           => ['nullable', 'string', 'max:255'],
        ];
    }
}
