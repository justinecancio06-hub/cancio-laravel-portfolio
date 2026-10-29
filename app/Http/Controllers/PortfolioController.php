<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        return view('home');
    }

    public function gallery()
    {
        return view('gallery');
    }

    public function projects()
    {
        return view('projects');
    }
}
