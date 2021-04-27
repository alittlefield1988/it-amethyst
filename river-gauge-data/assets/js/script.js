function getdata() {
    "use strict";

    var form = $("#myform");
    
    form.validate();
    
    if (form.valid()) {
        
        //var Message = document.getElementById("Message").value;//

        var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646, 07055660, 07055680, 07055780&period=P7D&parameterCd=00065&siteStatus=active";

        var myMethod = "GET";

        $(document).ready(function() { 

            $.ajax({
              method: myMethod,
              url: myURL
            })
        
            .done(function( msg ) {
                
                //document.getElementById("Message").innerHTML=JSON.stringify(msg);//
                var dates = [];  /* dates  contains the dates for the river data */
                var values = []; /* values contains the height values for the river data */

                /* fLen contains the length of the array (number of values) */
                var fLen = msg.value.timeSeries[0].values[0].value.length;
                for (var i = 0; i < fLen; i++) {
                	values[i] = msg.value.timeSeries[0].values[0].value[i].value;
                	dates[i] = msg.value.timeSeries[0].values[0].value[i].dateTime;
                }
            
                var sitename = msg.value.timeSeries[0].sourceInfo.siteName;  /* sitename contains the long name of the site */
                var sitecode = msg.value.timeSeries[0].sourceInfo.siteCode[0].value;  /* sitecode contains the site ID number */
                var siteDescription = msg.value.timeSeries[0].variable.variableDescription;  /* siteDesription contains the units of of the site */
                //document.getElementById("Message").value=dates.toString();
                

/* Put your code here to display a graph of the values and dates arrays*/
/* You can also use sitename, sitecode, and siteDescription to enhance your chart */

                var ctx = document.getElementById("chartjs-0");
                var myChart = new Chart(ctx, {
                    "type":"line",
                    "data": {
                        "labels": dates,
                        "datasets":[{"label":"Boxley",
                        "data": values,
                        "fill":false,
                        "borderColor":"#79BED9",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );
            /* put your chart configuration here */
            
                var dates = [];  /* dates  contains the dates for the river data */
                var values = []; /* values contains the height values for the river data */

                /* fLen contains the length of the array (number of values) */
                var fLen = msg.value.timeSeries[1].values[0].value.length;
                for (var i = 0; i < fLen; i++) {
                	values[i] = msg.value.timeSeries[1].values[0].value[i].value;
                	dates[i] = msg.value.timeSeries[1].values[0].value[i].dateTime;
                }
            
                var sitename = msg.value.timeSeries[1].sourceInfo.siteName;  /* sitename contains the long name of the site */
                var sitecode = msg.value.timeSeries[1].sourceInfo.siteCode[0].value;  /* sitecode contains the site ID number */
                var siteDescription = msg.value.timeSeries[1].variable.variableDescription;  /* siteDesription contains the units of of the site */
                //document.getElementById("Message").value=dates.toString();
                

/* Put your code here to display a graph of the values and dates arrays*/
/* You can also use sitename, sitecode, and siteDescription to enhance your chart */

                var ctx = document.getElementById("chartjs-1");
                var myChart = new Chart(ctx, {
                    "type":"line",
                    "data": {
                        "labels": dates,
                        "datasets":[{"label":"Ponca",
                        "data": values,
                        "fill":false,
                        "borderColor":"#345923",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );
            /* put your chart configuration here */
            
            var dates = [];  /* dates  contains the dates for the river data */
                var values = []; /* values contains the height values for the river data */

                /* fLen contains the length of the array (number of values) */
                var fLen = msg.value.timeSeries[2].values[0].value.length;
                for (var i = 0; i < fLen; i++) {
                	values[i] = msg.value.timeSeries[2].values[0].value[i].value;
                	dates[i] = msg.value.timeSeries[2].values[0].value[i].dateTime;
                }
            
                var sitename = msg.value.timeSeries[2].sourceInfo.siteName;  /* sitename contains the long name of the site */
                var sitecode = msg.value.timeSeries[2].sourceInfo.siteCode[0].value;  /* sitecode contains the site ID number */
                var siteDescription = msg.value.timeSeries[2].variable.variableDescription;  /* siteDesription contains the units of of the site */
                //document.getElementById("Message").value=dates.toString();
                

/* Put your code here to display a graph of the values and dates arrays*/
/* You can also use sitename, sitecode, and siteDescription to enhance your chart */

                var ctx = document.getElementById("chartjs-2");
                var myChart = new Chart(ctx, {
                    "type":"line",
                    "data": {
                        "labels": dates,
                        "datasets":[{"label":"Pruitt",
                        "data": values,
                        "fill":false,
                        "borderColor":"#8DA658",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );
            /* put your chart configuration here */
            var dates = [];  /* dates  contains the dates for the river data */
                var values = []; /* values contains the height values for the river data */

                /* fLen contains the length of the array (number of values) */
                var fLen = msg.value.timeSeries[3].values[0].value.length;
                for (var i = 0; i < fLen; i++) {
                	values[i] = msg.value.timeSeries[3].values[0].value[i].value;
                	dates[i] = msg.value.timeSeries[3].values[0].value[i].dateTime;
                }
            
                var sitename = msg.value.timeSeries[3].sourceInfo.siteName;  /* sitename contains the long name of the site */
                var sitecode = msg.value.timeSeries[3].sourceInfo.siteCode[0].value;  /* sitecode contains the site ID number */
                var siteDescription = msg.value.timeSeries[3].variable.variableDescription;  /* siteDesription contains the units of of the site */
                //document.getElementById("Message").value=dates.toString();
                

/* Put your code here to display a graph of the values and dates arrays*/
/* You can also use sitename, sitecode, and siteDescription to enhance your chart */

                var ctx = document.getElementById("chartjs-3");
                var myChart = new Chart(ctx, {
                    "type":"line",
                    "data": {
                        "labels": dates,
                        "datasets":[{"label":"Carver",
                        "data": values,
                        "fill":false,
                        "borderColor":"#593B02",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );
            }/* put your chart configuration here */    
                
                /* Continue for your reminding sites, being sure to change the index to 2,3... */
        );
    });
    }
}