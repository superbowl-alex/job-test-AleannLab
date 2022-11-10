import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { Container } from './Map.styled';
import { DefaultTheme } from './Theme';
import { ReactComponent as IconLocation } from '../../images/location.svg';

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

const markerOptions = {
  color: '#3A4562',
  backgroundColor: '#3A4562',
  zIndex: 10,
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
        <Marker position={center} icon={{ url: '../../images/location.svg' }} />
      </GoogleMap>
    </Container>
  );
};

export default React.memo(Map);
