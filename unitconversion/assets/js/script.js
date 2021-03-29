function calculate() {
    "use strict";

    var form = $( "#myform" );
    
    if (form.valid()) {
        
        var fromvalue = document.getElementById("FromValue").value;

        var fromunit;
        if (document.getElementById("FCentimeters").checked) {
            fromunit = document.getElementById("FCentimeters").value;
        }
        if (document.getElementById("FMeters").checked) {
            fromunit = document.getElementById("FMeters").value;
        }
        if (document.getElementById("FKilometers").checked) {
            fromunit = document.getElementById("FKilometers").value;
        }
        if (document.getElementById("FInches").checked) {
            fromunit = document.getElementById("FInches").value;
        }
        if (document.getElementById("FFeet").checked) {
            fromunit = document.getElementById("FFeet").value;
        }
        if (document.getElementById("FYards").checked) {
            fromunit = document.getElementById("FYards").value;
        }
        if (document.getElementById("FMiles").checked) {
            fromunit = document.getElementById("FMiles").value;
        }
        
        var tounit;
        if (document.getElementById("TCentimeters").checked) {
            tounit = document.getElementById("TCentimeters").value;
        }
        if (document.getElementById("TMeters").checked) {
            tounit = document.getElementById("TMeters").value;
        }
        if (document.getElementById("TKilometers").checked) {
            tounit = document.getElementById("TKilometers").value;
        }
        if (document.getElementById("TInches").checked) {
            tounit = document.getElementById("TInches").value;
        }
        if (document.getElementById("TFeet").checked) {
            tounit = document.getElementById("TFeet").value;
        }
        if (document.getElementById("TYards").checked) {
            tounit = document.getElementById("TYards").value;
        }
        if (document.getElementById("TMiles").checked) {
            tounit = document.getElementById("TMiles").value;
        }
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
        var myMethod = "POST";

        /* AJAX calculator requires Operand1, Operator, and Operand 2 */
        
        /* Create the data object and add the values as properties to the object 
        The names of the properties must EXACTLY match the names required by the AJAX page  */
        var myData = {};
        myData.FromValue = fromvalue;
        myData.FromUnit = fromunit;
        myData.ToUnit = tounit;
        
        /* Make sure document is ready */
        $(document).ready(function() {

            /* Perform AJAX call to process data */
            $.ajax({
              method: myMethod,
              data: myData,
              url: myURL
            })

            /* AJAX complete - display the result */
            .done(function( msg ) {
                document.getElementById("ToValue").innerHTML = msg;
            });
        });
    }
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueError").innerHTML = "";
    document.getElementById("FCentimeters").checked = false;
    document.getElementById("FMeters").checked = false;
    document.getElementById("FKilometers").checked = false;
    document.getElementById("FInches").checked = false;
    document.getElementById("FFeet").checked = false;
    document.getElementById("FYards").checked = false;
    document.getElementById("FMiles").checked = false;
    document.getElementById("FromUnitError").innerHTML = "";
    document.getElementById("TCentimeters").checked = false;
    document.getElementById("TMeters").checked = false;
    document.getElementById("TKilometers").checked = false;
    document.getElementById("TInches").checked = false;
    document.getElementById("TFeet").checked = false;
    document.getElementById("TYards").checked = false;
    document.getElementById("TMiles").checked = false;
    document.getElementById("ToUnitError").innerHTML = "";
    document.getElementById("ToValue").innerHTML = "";
}

$( "#myform" ).validate({

});