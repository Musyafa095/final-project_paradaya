<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\profile;

class ProfileController extends Controller
{
    public function storeupdate (Request $request) {
        $user = auth()->user();
        $request->validate([
            'bio' => 'required',
            'age' => 'required|integer'
        ], [
            'required' => 'inputan :attribute wajib diisi',
            'integer' => 'inputan :attribute harus berupa angka'
        ]);

        $profile = profile::updateOrCreate(
            ['user_id' => $user->id],
            [
                'bio' => $request->input('bio'),
                'age' => $request->input('age')
            ]);
        return response()->json([
           'message' => 'profile berhasil dibuat/diupdate',
            'data' => $user,
        ], 201);
    }
}
