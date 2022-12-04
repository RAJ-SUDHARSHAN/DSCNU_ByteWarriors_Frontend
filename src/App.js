import logo from './logo.svg';
import './App.css';
import Login from './jsx-folder/Login';
import TrackerList from './jsx-folder/TrackerList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tracker-list" element={<TrackerList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
