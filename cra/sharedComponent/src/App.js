import LocalButton from './Button';
import Header from './Header';
import Footer from './Footer';
import Title from './Title';

const App = () => (
  <div style={appPage}>
    <Header />
    <Title text="Shared Component" />
    <LocalButton />
    <Footer />
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
