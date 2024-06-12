import LocalButton from './Button';
import React from 'react';
import Subtitle from './Subtitle';

const SharedHeader = React.lazy(() => import('shared/Header'));
const SharedFooter = React.lazy(() => import('shared/Footer'));

const App = () => (
  <div style={appPage}>
    <React.Suspense fallback="Loading Header">
      <SharedHeader />
    </React.Suspense>
    <h1>Remote</h1>
    <Subtitle text="Mon sous-titre" icon="👋🏻" />
    <LocalButton />
    <React.Suspense fallback="Loading Footer">
      <SharedFooter />
    </React.Suspense>
  </div>
);

const appPage = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
};

export default App;
