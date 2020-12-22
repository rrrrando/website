<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="app">
       <x-invoice :data="json_encode([
          'number' => 1234,
          'customer' => [
              'name' => 'Acme',
              'country' => 'EE'
          ]
      ])" />
    </div>
    <x-input id="2" label="Test" />
    <script src="{{ @mix('js/app.js') }}"></script>
</body>
</html>
