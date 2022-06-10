import logo from './logo.svg';
import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Body>
          <SearchBar />
        </Body>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
