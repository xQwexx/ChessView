<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChessBoardPositionSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('chess_board_positions')->insert(['fen' => "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"]);
        DB::table('chess_board_positions')->insert(['fen' => "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR"]);
        DB::table('chess_board_positions')->insert(['fen' => "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR"]);
        DB::table('chess_board_positions')->insert(['fen' => "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R"]);
    }
}
