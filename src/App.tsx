import Main from './components/Main/Main';
import Container from './components/Container/Container';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Main />
      </Container>
    </>
  );
};

export default App;
