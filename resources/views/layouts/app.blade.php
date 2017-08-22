<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Awesome app</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <link href="css/app.css" rel="stylesheet" type="text/css">
        <script src="js/app.js"></script>
    </head>
    <body>
      @section('sidebar')
        <div id="navbar"></div>
      @show
      <div class="row justify-content-center p-5">
        @yield('content')
      </div>
    </body>
</html>
