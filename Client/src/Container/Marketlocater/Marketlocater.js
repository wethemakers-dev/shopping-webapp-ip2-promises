import React, { Component } from "react";
import "./Market.css";
import axios from "axios";

class Marketlocater extends Component {
  state = {
    venues: []
  };

  componentDidMount() {
    this.getVenues();
  }

  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAsBR_ey8-edBtZBRkMy0yeQNY2pqgAmco&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "E2QT4PRJGWN2BCGKGIZCCRLDDK0DQCJSTKOE1E154AUSMZK1",
      client_secret: "KGKPZSZOOIU0ZUSUVNR5Q3RR1D00HW04A1NF0Y5P3PII44HD",
      query: "food",
      ll: "32.009698, 35.833438",
      v: "20180323",
      radius: "4000",
      limit: "50"
    };

    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState(
          {
            venues: response.data.response.groups[0].items
          },
          this.renderMap()
        );
      })
      .catch(error => {
        console.log("ERROR!! " + error);
      });
  };

  initMap = () => {
    // Create A Map
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 32.009698, lng: 35.833438 },
      zoom: 15
    });

    // Create An InfoWindow
    var infowindow = new window.google.maps.InfoWindow();

    // Display Dynamic Markers
    // eslint-disable-next-line array-callback-return
    this.state.venues.map(myVenue => {
      var contentString = `${myVenue.venue.name}`;

      // Create A Marker
      var marker = new window.google.maps.Marker({
        position: {
          lat: myVenue.venue.location.lat,
          lng: myVenue.venue.location.lng
        },
        map: map,
        title: myVenue.venue.name
      });

      // Click on A Marker!
      marker.addListener("click", function() {
        // Change the content
        infowindow.setContent(contentString);

        // Open An InfoWindow
        infowindow.open(map, marker);
      });
    });
  };

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default Marketlocater;
