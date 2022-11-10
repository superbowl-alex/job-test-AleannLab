import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { WrapSpinner } from './Loader.styled';

const Loader = () => {
  return (
    <WrapSpinner>
      <PulseLoader
        color={'#3A4562'}
        size={15}
        speedMultiplier={0.4}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </WrapSpinner>
  );
};

export default Loader;
