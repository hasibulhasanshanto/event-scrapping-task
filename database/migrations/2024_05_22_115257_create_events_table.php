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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('url');
            $table->string('country');
            $table->string('document');
            $table->string('source_type');
            $table->string('reference_selector')->nullable();
            $table->boolean('horizon_scanning')->default(true);

            $table->string('source_container');
            $table->string('source_link');
            $table->string('source_title');
            $table->string('source_description')->nullable();
            $table->string('source_date');
            $table->string('source_remove_text_from_date');
            $table->string('source_date_format');

            $table->string('document_title');
            $table->string('document_description')->nullable();
            $table->string('document_date');
            $table->string('document_remove_text_from_date');
            $table->string('document_date_format');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
