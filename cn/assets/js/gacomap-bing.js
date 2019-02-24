function loadMapScenario() {
  var navigationBarMode = Microsoft.Maps.NavigationBarMode;
  var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    enableClickableLogo: false,
    showCopyright: false,
    disableScrollWheelZoom: true,
    disableMapTypeSelectorMouseOver: true,
    disableBirdseye: true,
    navigationBarMode: navigationBarMode.compact,
    supportedMapTypes: [
      Microsoft.Maps.MapTypeId.road,
      Microsoft.Maps.MapTypeId.aerial
    ]
  });
  map.setView({
    center: new Microsoft.Maps.Location(35.676352, 139.776566),
    zoom: 15
  });
  var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), {
    title: '株式会社GACO',
    subTitle: 'GACO.ltd',
    color: 'green'
  });
  var layer = new Microsoft.Maps.Layer();
  layer.add(pushpin);
  map.layers.insert(layer);
}
