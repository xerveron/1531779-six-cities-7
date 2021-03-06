import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../props/offer.prop';
import cityProp from '../../props/city.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const.js';
import { connect } from 'react-redux';

function Map({ offers, city, hoverOffer }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer.options.icon) {
          layer.remove();
        }
      });
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon: defaultCustomIcon,
            },
          )
          .addTo(map);
        if (hoverOffer) {
          leaflet
            .marker(
              {
                lat: hoverOffer.location.latitude,
                lng: hoverOffer.location.longitude,
              },
              {
                icon: currentCustomIcon,
              },
            )
            .addTo(map);
        }
      });
    }
  }, [map, offers, city, hoverOffer,currentCustomIcon,defaultCustomIcon]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: cityProp,
  hoverOffer: offerProp,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

export { Map };
export default connect(mapStateToProps, null)(Map);
