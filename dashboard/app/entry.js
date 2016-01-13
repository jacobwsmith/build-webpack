// Common CSS
require("../../assets/css/_type.css");

// Common JS
require("../../node_modules/jquery/dist/jquery.min.js");
require("../../node_modules/angular/angular.min.js");
require("../../assets/js/global.js");

// Page Specific CSS
require("./app.css");

// Page Specific JS 
document.write(require("./app.js"));
