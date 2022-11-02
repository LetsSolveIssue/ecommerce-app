import React from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from '../error-boundary/error-boundary.styles';

const NotFound = () => (
  <ErrorImageOverlay>
    <ErrorImageContainer imageUrl='https://i.imgur.com/Q2BAOd2.png' />
    <ErrorImageText>Page Not Found</ErrorImageText>
  </ErrorImageOverlay>
);
export default NotFound;