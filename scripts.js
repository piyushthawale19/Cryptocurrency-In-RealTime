let btn=document.querySelector("#bitcoin");
let eth=document.querySelector("#ethereum");
let doge=document.querySelector("#dogecoin");

let settings={
    "asyc":true,
    "crossDomain":true,
    "url": "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response) {
    console.log(response);
    btn.innerHTML=response[0].current_price;
    eth.innerHTML=response[1].current_price;
doge.innerHTML=response[7].current_price;
});