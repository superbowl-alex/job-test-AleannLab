import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { Container } from './Map.styled';
import { DefaultTheme } from './Theme';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultOptions = {
  panControl: false,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: DefaultTheme,
};

const Map = ({ center }) => {
  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);
  return (
    <Container>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <MarkerF onLoad={onLoad} position={center} />
      </GoogleMap>
    </Container>
  );
};

Map.propTypes = {
  center: PropTypes.object.isRequired,
};

export default React.memo(Map);
