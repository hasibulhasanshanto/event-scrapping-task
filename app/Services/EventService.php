<?php

namespace App\Services;

use DB;
use Exception;
use App\Models\User;
use App\Models\Event;
use App\Mail\SentTaskCreationMail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Database\Eloquent\Model;

class EventService
{

    /**
     * Construct property promotion
     */
    public function __construct(protected Event $model)
    {
    }

    public function paginateData()
    {
        try {
            $query = $this->model::query();
            if (request("search")) {
                $query->where("name", "like", "%" . request("search") . "%");
                // $query->OrWhere("country", "like", "%" . request("search") . "%");
            }
            return $query->orderBy('id', 'desc')->paginate(10)->onEachSide(1);
        } catch (Exception $e) {
            Log::error('Something went wrong'. $e->getMessage());
        }
    }

    public function storeData(array $validated)
    {
        try {
            DB::beginTransaction();
            try {
                // Get random client using to assign the event and send mail
                $user = User::whereRole('client')->inRandomOrder()->first();
                $validated['user_id'] = $user->id;
                $event = $this->model::create($validated);

                $mailData = [
                    "email"  => $user->email,
                    "name"   => $user->name,
                    'title'  => 'Sent task creation mail from '. config('app.name'),
                    "body"   => "This is a notify message for a newly created task has been created and it's assign to your task. Please checkout the task on your dashboard panel. If you have any queries please contact us through out the support center."
                ];

                // Send mail to the client using queue
                Mail::to($user->email)->queue(new SentTaskCreationMail($mailData));

                DB::commit();
                return $event;
            } catch (Exception $e) {
                DB::rollback();
                Log::error('Event creation went wrong'. $e->getMessage());
            }
        } catch (Exception $e) {
            Log::error('Something went wrong'. $e->getMessage());
        }
    }

    public function updateData(array $validated, Model $model)
    {
        try {
            return $model->update($validated);
        } catch (Exception $e) {
            Log::error('Something went wrong'. $e->getMessage());
        }
    }

    public function deleteData(Model $model)
    {
        try {
            return $model->delete();
        } catch (Exception $e) {
            Log::error('Something went wrong'. $e->getMessage());
        }
    }

    public function enableUpdate(string $id)
    {
        try {
            $event = $this->model::whereId($id)->first();
            $event->horizon_scanning = $event->horizon_scanning ? false : true;
            $event->save();

            return $event;
        } catch (Exception $e) {
            Log::error('Something went wrong'. $e->getMessage());
        }
    }
}
