<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Task creation mail</title>
</head>
<body>
    <h2>Hello, {{ $mailData['name'] }}</h2>
    <p>Your email is: {{ $mailData['email'] }}</p>
    <p>{{ $mailData['body'] }}</p>
    <h5>Thanks for using our app!</h5>
    <p style="margin-top: 10px; color:blueviolet">-Regards, {{ config('app.name') }}</p>
</body>
</html>
