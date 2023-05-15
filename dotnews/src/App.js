import './App.css';
import Navbar from './components/navBar';
import NewsContainer from './components/newsContainer';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <NewsContainer />
      </div>
    </>
  )
}

export default App;
