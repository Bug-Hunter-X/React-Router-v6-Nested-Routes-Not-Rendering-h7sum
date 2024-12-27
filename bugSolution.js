```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
        <Outlet/>
    </div>
  );
}

function About() {
  return <div>About</div>;
}

// Added for better demonstration 
function Outlet(){
  let location = useLocation();
  console.log(location);
  return <div>Outlet:{location.pathname}</div>;
}
```