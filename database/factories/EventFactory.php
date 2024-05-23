<?php

namespace Database\Factories;

use App\Models\User;
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
            'user_id'                        => User::whereRole('client')->inRandomOrder()->first()->id,
            'name'                           => fake()->name(),
            'url'                            => fake()->domainName(),
            'country'                        => fake()->randomElement(["Bangladesh","Albania","Canada","United States","United Kingdom"]),
            'document'                       => fake()->randomElement(["Consultation","Speech","Media Release","Unknown"]),
            'source_type'                    => fake()->randomElement(["Web Scraping","Query","Unknown"]),
            'reference_selector'             => fake()->company(),
            'horizon_scanning'               => fake()->randomElement([true, false]),
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
