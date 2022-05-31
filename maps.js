function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(55.73317, 12.564302),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
