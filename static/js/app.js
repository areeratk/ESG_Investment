let dropdown = $('#selDataset');

dropdown.empty();

dropdown.append('<option selected="true" disabled>Choose Company</option>');
dropdown.prop('selectedIndex', 0);


const jsonurl = 'https://api.myjson.com/bins/16vwi6';

$.getJSON(jsonurl, function (data) {
  $.each(data, function (key, entry) {
    dropdown.append($('<option></option>').attr('value', entry.symbol).text(entry.name));
  })
});
//<option value="AAPL">Apple Inc</option>

var tbody = $("<tbody />"),tr;

// function buildTable(stock) {
//   $.each(jsonurl,function(_,obj) {
//       if (stock==="AAPL")
//       console.log(obj.sector);
//       tr = $("<tr />");
//       $.each(obj,function(_,text) {
//         tr.append("<td>"+text+"</td>")      
//         tr.append("<td>"+obj.sector+"</td>")
//         tr.append("<td>"+obj.stock_prices+"</td>")  
//       });
//       tr.appendTo(tbody);
//   })
// }
// tbody.appendTo("#table1"); // only DOM insertion


function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

function buildPlot(stock) {


    if (stock==="Choose Company") return;

  var apiKey = "Rn7DiGxY-kcDgp1GWyrD";

  //var today = new Date();
  //var dd = String(today.getDate()).padStart(2, '0');
  //var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  //var yyyy = today.getFullYear();
  var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    //today = yyyy + '-' + mm + '-' + dd;

  var url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=2014-01-01&end_date=${date}&api_key=${apiKey}`;

  d3.json(url, function(data) {
    // Grab values from the response json object to build the plots
    var name = data.dataset.name;
    var stock = data.dataset.dataset_code;
    var startDate = data.dataset.start_date;
    var endDate = data.dataset.end_date;
    var dates = unpack(data.dataset.data, 0);
    var closingPrices = unpack(data.dataset.data, 11);

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      }
    };

    var data = [trace1];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };


    Plotly.newPlot("first-dopdown-plot", data, layout);
  });
}

buildPlot(document.getElementById('selDataset').value);


//-------------------------------
//-------------------------------Button Below
//-------------------------------

var people = data;

var button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#selDataset");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  //console.log(people);

  var filteredData = people.filter(person => person.symbol === inputValue);

  //console.log(filteredData);
  if (inputValue=filteredData) {
    console.log(filteredData)

    var list = d3.select(".summary");

    list.html("");

    var name = filteredData.map(a => a.name);
    var symbol = filteredData.map(a => a.symbol);
    var sectors = filteredData.map(a => a.sectors);
    var esg_per = filteredData.map(a => a.esg_per);
    var stock_price = filteredData.map(a => a.stock_prices);
    var annual_sales = filteredData.map(a => a.annual_sales);
    var hq_location = filteredData.map(a => a.hq_location);
    var website = filteredData.map(a => a.website);
    var pe_growth = filteredData.map(a => a.pe_growth);
    var market_cap = filteredData.map(a => a.market_cap);
    var ptc_flow = filteredData.map(a => a.ptc_flow);
    var employees = filteredData.map(a => a.employees);

    list.append("li").text(`Name: ${name}`);
    list.append("li").text(`Symbol: ${symbol}`);
    list.append("li").text(`Sector: ${sectors}`);
    list.append("li").text(`ESG Rating: ${esg_per}`);
    list.append("li").text(`Stock Price: ${stock_price}`)
    list.append("li").text(`Annual Sales: ${annual_sales}`);
    list.append("li").text(`HQ Location: ${hq_location}`);
    list.append("li").text(`Website: ${website}`);
    list.append("li").text(`P/E Growth: ${pe_growth}`);
    list.append("li").text(`Market Cap: ${market_cap}`)
    list.append("li").text(`PTC Flow: ${ptc_flow}`);
    list.append("li").text(`Employees: ${employees}`)
    // $.each(filteredData, function (key, value) { 
    //   $("#" + key).text(value);
    //});
  }
  // // BONUS: Calculate summary statistics for the age field of the filtered data

  // // First, create an array with just the age values
  // var ages = filteredData.map(person => person.age);

  // // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  // var mean = math.mean(ages);
  // var median = math.median(ages);
  // var mode = math.mode(ages);
  // var variance = math.var(ages);
  // var standardDeviation = math.std(ages);

  // // Then, select the unordered list element by class name
  // var list = d3.select(".summary");

  // // remove any children from the list to
  // list.html("");

  // // append stats to the list
  // list.append("li").text(`Mean: ${mean}`);
  // list.append("li").text(`Median: ${median}`);
  // list.append("li").text(`Mode: ${mode}`);
  // list.append("li").text(`Variance: ${variance}`);
  // list.append("li").text(`Standard Deviation: ${standardDeviation}`);
});