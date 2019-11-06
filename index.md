<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>    
  <script>
      $(document).ready(function() {
          var publicSpreadsheetUrl =
            "https://docs.google.com/spreadsheets/d/1pmbsUQtSV5D4eHPBZ5XDKwrXk3YlbrQIiTnhanNoSZk/edit?usp=sharing";

          Tabletop.init({
            key: publicSpreadsheetUrl,
            callback: showInfo,
            simpleSheet: true
          });

          function showInfo(data, tabletop) {
            console.log(data);
            var dt = data;
            console.log(dt[1]["Category"]);

            dt.forEach(ele => {
              var blogEntryHTML = generateBlogEntry(ele);
            });
          }
    </script>
</html>
