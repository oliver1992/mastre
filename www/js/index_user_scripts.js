/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  .uib_w_1 */
    $(document).on("click", ".uib_w_1", function(evt)
    {
        cordova.plugins.barcodeScanner.scan(
              function (result) {
                  $("#filter").val(result.text);
                  var rex = new RegExp($("#filter").val(), 'i');
                                $('.searchable tr').hide();
                                $('.searchable tr').filter(function () {
                                    return rex.test($(this).text());
                                }).show();
              }, 
              function (error) {
                  alert("Scanning failed: " + error);
              }
        );
    });
    
        /* button  #btnAgregar */
    $(document).on("click", "#btnAgregar", function(evt)
    {
        
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
