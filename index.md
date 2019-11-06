<html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
  </head>
  <body>
    Results

    
  </body>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.2/tabletop.min.js">
    <script src="/toolbox.js">
    <script>
        $(document).ready(function() {
      console.log("Data from the Google Sheets db");
      Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/1pmbsUQtSV5D4eHPBZ5XDKwrXk3YlbrQIiTnhanNoSZk/edit?usp=sharing',
        callback: function(data, tabletop) {
          console.log(data);
          $("body").html(JSON.stringify(data));
        },
        simpleSheet: true
      })
    });
   </script>
</html>
