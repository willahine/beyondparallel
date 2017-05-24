var chart = AmCharts.makeChart( "chartdiv", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "country": "Shared Ethnicity",
    "value": 15,
    "color": "#ffc726"
  }, {
    "country": "Increase Economic Growth",
    "value": 10,
    "color": "#0f2a48"
  }, {
    "country": "Increase International Influence",
    "value": 1,
    "color": "#f05a28"
  }, {
    "country": "Resolve Issue of Separated Families",
    "value": 5,
    "color": "#83d4ef"
  }, {
    "country": "To Defend Against Outside Threats",
    "value": 2,
    "color": "#92278f"
  }, 
       {
    "country": "No Response",
    "value": 2,
     "color": "#173862"
  },  
                   {
    "country": "Multiple Reasons",
    "value": 1,
    "color": "#be1e2d"
  }  
                   
              ],
  "valueField": "value",
  "titleField": "country",
  "colorField": "color",
  "outlineAlpha": 0.4,
  "depth3D": 15,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]] respondent(s)</b> ([[percents]]%)</span>",
  "angle": 30,
  "export": {
    "enabled": true
  }
} );