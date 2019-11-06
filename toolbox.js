function init() {
    Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vRPj5ANy-5hloo0kQoA2wkVXf1AJ9zOLy_QxvRJkJWrsnCO19T321Nx5yXwziQRlIbXhJWJUjCucqMD/pubhtml',
    callback: function(data, tabletop) {
    console.log(data)
    },
    simpleSheet: true } )
    }
    window.addEventListener(‘DOMContentLoaded’, init)