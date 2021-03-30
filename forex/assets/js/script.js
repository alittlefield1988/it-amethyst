function calculate() {
    "use strict";

    var form = $("#myform");
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        var BaseCurrency = document.getElementById("BaseCurrency").value;
        var Convert = document.getElementById("Convert").value;
        var apiKey = "4OKcDcbFyhgTfATKTCEp8P_NVGzjVc3t";
        var FromDate = document.getElementById("FromDate").value;
        var ToDate = document.getElementById("ToDate").value;

        /* URL for AJAX Call */
        var myURL = "https://api.polygon.io/v2/aggs/ticker/" + BaseCurrency + Convert + "/currency?apiKey=" + apiKey;

        /* AJAX Method (POST or GET) */
        var myMethod = "GET";

        /* Make sure the document is ready */
        $(document).ready(function() { 

            /* Perform AJAX call - Note that the AJAX function 
               does not have a selector */

            $.ajax({
              method: myMethod,
              url: myURL
            })

            /* AJAX complete - result is in msg */
            .done(function( msg ) {

                /* Your code to process the result goes here - 
                   display the returned message */
                document.getElementById("BaseCurrency").innerHTML = msg.currency;
            })
            
            /* AJAX complete with error - probably invalid stock ticker symbol */
            .fail(function( msg ) {

                /* Your code to process the result goes here - 
                   display the returned message */
                alert("Currency Not Found - Status: " + msg.status)
            });
        });
  
  
  /* URL for AJAX Call */
        var myURL2 = "https://api.polygon.io/v2/aggs/ticker/" + BaseCurrency + Convert + "/range/1/day/" + FromDate + "/" + ToDate + "?unadjusted=false&sort=asc&limit=32&apiKey=" + apiKey;

        /* AJAX Method (POST or GET) */
        var myMethod2 = "GET";

        /* Make sure the document is ready */
        $(document).ready(function() { 

            /* Perform AJAX call - Note that the AJAX function 
               does not have a selector */

            $.ajax({
              method: myMethod2,
              url: myURL2
            })

            /* AJAX complete - result is in msg */
            .done(function( msg2 ) {

                /* Your code to process the result goes here  
                    display the returned message */
                var currencydate = [];
                var currencyvalue = [];
                var numdays = msg2.results.length;
                if (numdays > 0) {
                    for (var i = 0; i < numdays; i++) {
                        /* stock close value */
                        currencyvalue[i] = msg2.results[i].c;
                        /* stock volume */
                        var tempdate = new Date(msg2.results[i].t);
                        /* extract the date string from the value */
                        currencydate[i] = tempdate.toLocaleDateString();
                    }
                }

                var currencyvaluetable = "";
                if (numdays > 0) {
                    currencyvaluetable = currencyvaluetable + "<table><caption>Currency Value</caption><tr><th>Date</th><th>Price</th></tr>";
                    for (var i = 0; i < numdays; i++) {
                        currencyvaluetable = currencyvaluetable + "<tr><td>" + currencydate[i] + "</td><td>" + currencyvalue[i] + "</td></tr>";
                    }
                    currencyvaluetable = currencyvaluetable + "</table>"
                    document.getElementById("CurrencyValueTable").innerHTML = currencyvaluetable;
                }

                var ctx0 = document.getElementById("chartjs-0");
                var myChart = new Chart(ctx0, {
                    "type":"line",
                    "data": {
                        "labels": currencydate,
                        "datasets":[{"label":"Currency Value",
                        "data": currencyvalue,
                        "fill":false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );
            })
            
            /* AJAX complete with error - probably invalid stock ticker symbol */
            .fail(function( msg ) {

                /* Your code to process the result goes here - 
                   display the returned message */
                alert("Currency2 Not Found - Status: " + msg.status)
            });
        });
    }
}

function clearform() {
    document.getElementById("BaseCurrency").value = "";
    document.getElementById("Convert").value = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
    document.getElementById("CurrencyValueTable").innerHTML = "";
    
    /* Ugly Code to Erase Canvas */
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
    var canvas1 = document.getElementById("chartjs-1");
    var context1 = canvas1.getContext('2d');    
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
}