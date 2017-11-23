let mix = require('laravel-mix').mix
mix.js('Resources/Assets/scripts/app.js', 'Public/scripts')
   .sass('Resources/Assets/styles/app.scss', 'Public/styles')
