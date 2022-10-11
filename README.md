# stat-tracker

STEAM API KEY: 6DCD8CE742C40D955C67CA739677F104

<!--code to fetch cheapshark game prive data>
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));



twitch app info:
client ID: ue4opxhc87trq25vwzpqv7fm488q97
client secret: enxc3zcpbry2ti09xkmih4i83tzx8u