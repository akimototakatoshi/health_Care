<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calorie_data', function (Blueprint $table) {
            $table->id();
            $table->string("calorie_name",225);
            $table->string("waste_rate",11);
            $table->string("calorie",11);
            $table->string("moisture",11);
            $table->string("protein",11);
            $table->string("lipid",11);
            $table->string("carbohydrates",11);
            $table->string("ash",11);
            $table->string("salt",11);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('calorie_data');
    }
};
