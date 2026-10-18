import{BrowserRouter, Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Project1 from './project1';
import Orders from './components/orders';

// amazon web site.....
function App() {
  // alert("I build an Amazon clone using React.js, javaScript, css, Node.js. I used REST APIs and Fetch APIs for frontend- backend communication and immplemented product listing , search, cart, slider and resposive design.")

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Project1 />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
