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
        Schema::table('calorie_intakes', function (Blueprint $table) {
            //
            $table->tinyInteger('week')->after('calorie');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('calorie_intakes', function (Blueprint $table) {
            //
            $table->dropColumn('week');
        });
    }
};
