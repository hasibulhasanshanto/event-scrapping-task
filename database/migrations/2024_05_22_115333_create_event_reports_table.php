<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('event_reports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('event_id')->constrained('events')->cascadeOnDelete();
            $table->foreignId('created_by')->constrained('users')->cascadeOnDelete();
            $table->string('title');
            $table->longText('description');
            $table->string('date')->nullable();
            $table->timestamp('processed_at')->nullable();
            $table->string('source_url')->nullable();
            $table->string('base_url')->nullable();
            $table->boolean('is_verified')->default(false);
            $table->json('report')->nullable();
            $table->timestamps();

            $table->index(['title']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_reports');
    }
};
