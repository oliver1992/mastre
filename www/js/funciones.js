 $(document).ready(function () {
              (function ($) {
                            $('#filter').keyup(function () {
    
                                var rex = new RegExp($(this).val(), 'i');
                                $('.searchable tr').hide();
                                $('.searchable tr').filter(function () {
                                    return rex.test($(this).text());
                                }).show();
    
                            })
                        }(jQuery));
    
                    });
            function clave(){
             cordova.plugins.barcodeScanner.scan(
              function (result) {
                  $("#claveAgregar").val(result.text);
              }, 
              function (error) {
                  alert("Scanning failed: " + error);
              }
              );
            }
             function NumCheck(e, field) {
                  key = e.keyCode ? e.keyCode : e.which
                  // backspace
                  if (key == 8) return true
                  // 0-9
                  if (key > 47 && key < 58) {
                    if (field.value == "") return true
                    regexp = /.[0-9]{2}$/
                    return !(regexp.test(field.value))
                  }
                  // .
                  if (key == 46) {
                    if (field.value == "") return false
                    regexp = /^[0-9]+$/
                    return regexp.test(field.value)
                  }
                  // other key
                  return false
                }
              function cargarTabla(){
              
                try
                  { 
                    $.ajax({
                      url: "http://192.168.1.6/inventarios/index.php/Inventarios",
                      data:
                      {
                          q: "Cordoba,es",
                      },
                      type: "post",
                      async: true,
                      //contentType: "text/json; charset=utf-8",
                      dataType: "json",        
                      success: function(data) { 
                        tabla(data);      
                      },
                      error: function(jqXmlHttpRequest, textStatus, errorThrown) { alert("Error leyendo datos."); }
                        });
                      } catch (err) 
                      {
                        alert(err);
                      }

            }
            function tabla(data){       
                    var tab = "";
                    $.each(data, function(k,v){
                            var codigoProducto = v.codigoProducto;
                            var descripcion    = v.descripcion;
                            var precio = v.precio;
                            tab = tab + "<tr><td> <h4>C&oacute;digo: <strong>"+codigoProducto+"</strong></h4><h4>Descripci&oacute;n: <strong>"+descripcion+"</strong></h4><h4>Precio: <strong>$ &nbsp;"+precio+"</strong></h4></td></tr>";
                        
                    });
                    document.getElementById("tablaProductos").innerHTML = tab;
            }