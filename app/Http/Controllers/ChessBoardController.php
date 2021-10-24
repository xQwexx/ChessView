<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
use App\Models\ChessBoardPosition;

class ChessBoardController extends Controller
{
    public function index(Request $request)
    {
        $fen = $request->query('fen');
        if(!$fen)
        {
            if($request->getRequestUri() != "/" && $request->getRequestUri() != "/rand")
            {
                return App::abort(404);
            }
            $fen = ChessBoardPosition::inRandomOrder()->first()->fen;
        }
        return view('welcome', [
            'fen' => $fen,
        ]);
    }

    //show
}
