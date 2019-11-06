<html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
  </head>
  <body>    
    <template id="entry-template">
        <div class="entry-container">
          <div class="thumbnail">
            <img src="https://dummyimage.com/150x150.png" alt="" />
          </div>
          <div class="content">
            <div>
              <div class="block">
                <div class="division">
                  <h2>CODING</h2>
                </div>
              </div>
              <h2 class="productName">
                Build your own blog with Google Sheets as CMS and Tabletop.js
              </h2>
              <p class="publishedAt">May 11, 2019</p>
              <p class="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                quisquam maxime, ab itaque, ratione consectetur, ea corporis
                aspernatur doloribus quam alias? Maxime deserunt, optio itaque nam
                quisquam eius doloribus fugiat.
              </p>
            </div>
          </div>
        </div>
      </template>
      <section class="blog-container">
        <div class="header">
          <h1>The Amazing Tool Kit.</h1>
        </div>
        <!-- <div class="entry-container">
            <div class="thumbnail">
            <img src="https://dummyimage.com/150x150.png" alt="" />
            </div>
            <div class="content">
            <div>
                <div class="block">
                <div class="division">
                    <h2>CODING</h2>
                </div>
                </div>
                <h2 class="productName">
                Build your own blog with Google Sheets as CMS and Tabletop.js
                </h2>
                <p class="publishedAt">May 11, 2019</p>
                <p class="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                quisquam maxime, ab itaque, ratione consectetur, ea corporis
                aspernatur doloribus quam alias? Maxime deserunt, optio itaque nam
                quisquam eius doloribus fugiat.
                </p>
            </div>
            </div>
        </div> -->
        </section>    
  </body>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.2/tabletop.min.js"></script>
    <script src="/toolbox.js"></script>
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


          function generateBlogEntry(productContent) {
            var imgURL = productContent.imgURL;
            var division = productContent.division;
            var productName = productContent.productName;
            var publishedAt = productContent.publishedAt;
            var description = productContent.description;

            var contents = $("#entry-template").html();
            var a = $($.parseHTML(contents));

            contents = a.find(".thumbnail img").attr("src", imgURL);
            contents = a.find(".division").text(division);
            contents = a.find(".productName").text(productName);
            contents = a.find(".publishedAt").text(publishedAt);
            contents = a.find(".description").text(description);

            var entry = $('<div class="entry"></div>');
            $(".blog-container").append(entry.append(a));
          }
        });

 </script>
</html>
