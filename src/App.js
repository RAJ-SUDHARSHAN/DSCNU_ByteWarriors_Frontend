import './App.css';
import Login from './jsx-folder/Login';
import TrackerList from './jsx-folder/TrackerList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Child from './jsx-folder/Child';
import Map from './jsx-folder/Map'
import AddChild from './jsx-folder/AddChild';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tracker-list" element={<TrackerList />} />
        <Route path='/Child' element={<Map />} />
        <Route path='/AddChild' element={<AddChild />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
