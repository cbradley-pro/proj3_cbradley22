function makeplot() 
{
    Plotly.d3.csv("https://raw.githubusercontent.com/freemanbach/itec225/main/financedata/src/aapl/aapl_close_data_rev.csv", function(data){ processData(data)});
}
  
function processData(allRows) 
{
    var x = [], y = [];
    for (var i=allRows.length-30; i<allRows.length; i++) 
    {
        row = allRows[i];
        x.push( row['date'] );
        y.push( row['close'] );
    }
    makePlotly(x,y);
}

function makePlotly(x,y){
    var traces = [{
        x: x,
        y: y,
        marker: {color: '#ff7200'}
    }];
    Plotly.newPlot('myDiv', traces);
}