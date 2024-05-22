<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

  /**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class EventFactory extends Factory
{
      /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id'                        => 1,
            'name'                           => fake()->name(),
            'url'                            => fake()->domainName(),
            'country'                        => fake()->country(),
            'document'                       => fake()->name(),
            'source_type'                    => fake()->name(),
            'reference_selector'             => fake()->company(),
            'source_container'               => fake()->name(),
            'source_link'                    => fake()->name(),
            'source_title'                   => fake()->title(),
            'source_description'             => fake()->sentence(),
            'source_date'                    => fake()->city(),
            'source_remove_text_from_date'   => fake()->city(),
            'source_date_format'             => fake()->city(),
            'document_title'                 => fake()->title(),
            'document_description'           => fake()->sentence(),
            'document_date'                  => fake()->city(),
            'document_remove_text_from_date' => fake()->city(),
            'document_date_format'           => fake()->city(),
        ];
    }
}
