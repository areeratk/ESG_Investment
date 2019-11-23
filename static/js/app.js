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

var tbody = $("<tbody />"),tr;


function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

function buildPlot(stock) {


    if (stock==="Choose Company") return;

  var apiKey = "Rn7DiGxY-kcDgp1GWyrD";


  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


  var url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=2014-01-01&end_date=${date}&api_key=${apiKey}`;

  d3.json(url, function(data) {
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


  var inputElement = d3.select("#selDataset");


  var inputValue = inputElement.property("value");

  console.log(inputValue);


  var filteredData = people.filter(person => person.symbol === inputValue);


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
  }

});