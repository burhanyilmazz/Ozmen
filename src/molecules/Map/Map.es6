export default class Map {

  constructor(el, options) {
    const $el = el;
    el = $el;

    this.$el = $el;

    const styles = [{
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e9e9e9"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 29
      }, {
        "weight": 0.2
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 18
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 16
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }, {
        "lightness": 21
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#dedede"
      }, {
        "lightness": 21
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#ffffff"
      }, {
        "lightness": 16
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "saturation": 36
      }, {
        "color": "#333333"
      }, {
        "lightness": 40
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "color": "#f2f2f2"
      }, {
        "lightness": 19
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#fefefe"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#fefefe"
      }, {
        "lightness": 17
      }, {
        "weight": 1.2
      }]
    }];

    const defaults = {
      zoom: 15,
      center: new google.maps.LatLng(41.0428027, 28.9826327),
      url: '../../assets/data/Map.json',
      pin: options.pinmedia || '../../assets/images/content/pin.png',
    };

    defaults['styles'] = styles;

    this.options = $.extend({}, defaults, options);

    const pinStatus = !this.options.lat && !this.options.lng;

    this.map = new google.maps.Map(this.$el[0], this.options);

    if (pinStatus) {
      this.mapDataHandler();
    } else {
      this.options["markers"] = [{
        "coords": {
          "lat": this.options.lat,
          "lng": this.options.lng
        },
        "url": this.options.url,
        "content": this.options.content
      }]
    }
    google.maps.event.addDomListener(window, 'load', this.markerCreator());
  }

  mapFocus(place) {
    const newPlace = place.split(',');
    const position = new google.maps.LatLng(newPlace[0], newPlace[1]);
    this.bounds = new google.maps.LatLngBounds();
    this.bounds.extend(position);

    this.map.fitBounds(this.bounds);
    this.map.setZoom(11);
  }

  mapDataHandler() {
    $.ajax({
      async: false,
      url: this.options.url ? this.options.url : this.defaults.url,
      type: 'GET',
      dataType: "json",
      contentType: "application/json",
      success: (data) => {
        this.options["markers"] = data;
      }
    });
  }

  markerCreator() {
    const markers = this.options.markers;

    for (let i = 0; i < markers.length; i++) {
      this.addMarker(markers[i]);
    }
  }

  addMarker(props) {
    const marker = new google.maps.Marker({
      position: {
        lat: Number(props.coords.lat),
        lng: Number(props.coords.lng)
      },
      map: this.map,
      icon: this.options.pin ? this.options.pin : this.defaults.pin,
    });

    marker.addListener('click', function () {
      $(document).trigger("map.click", props.id);
    });
  }
}