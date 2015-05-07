function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;

  var stockAPI = "http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=" + symbol

  $.ajax({
    url: stockAPI,
    type: "get",
    dataType: "jsonp"
  }).done(function(response) {
    this.companyName = response["Name"];
    this.price = response["LastPrice"];
    stockView.render();
  });

Stock.prototype = {
  totalValue: function() { return this.price * this.numShares; }
  }
}
