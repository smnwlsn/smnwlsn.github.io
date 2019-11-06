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
  