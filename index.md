<html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>    
  <script>
    function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1pmbsUQtSV5D4eHPBZ5XDKwrXk3YlbrQIiTnhanNoSZk/edit?usp=sharing',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
</script>
</html>
