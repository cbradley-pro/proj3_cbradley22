function makeplot() 
{
    Plotly.d3.csv("https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/australia/aut_case_data_rev.csv",function(data){processData(data, 'Dates', 'Case')});
    Plotly.d3.csv("https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/australia/aut_vacc_data_rev.csv",function(data){processData(data, 'Dates', 'Vacc')});
}
  
function processData(allRows, col1, col2) 
{
    var x = [], y = [];
    for (var i=allRows.length-30; i<allRows.length; i++) 
    {
        row = allRows[i];
        x.push( row[col1] );
        y.push( row[col2] );
    }
    makePlotly(x,y,col2);
}

function makePlotly(x,y,name){
    var traces = [{
        x: x,
        y: y,
        name: name
    }];
    Plotly.plot('myDiv', traces);
}