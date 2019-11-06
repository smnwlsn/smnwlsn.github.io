$(document).ready(function() {
    console.log("Data from the Google Sheets db");
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/12yk6RWGu3R1QQ49lMzc315WdMYwdsrSakTvqoCIyRDw/edit?usp=sharing',
      callback: function(data, tabletop) {
        console.log(data);
        $("body").html(JSON.stringify(data));
      },
      simpleSheet: true
    })
  });
  