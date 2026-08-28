import { useState } from 'react';
// react-bootstrap
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';

// project-imports
import MainCard from 'components/MainCard';

// ===============================|| SPINNER - SIZE ||============================== //

export default function BoxSpinner() {    
  return (
  <div className="justify-content-center" width="100%" height="100%" gap={2}>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
      Loading...
  </div>            
  );
}
