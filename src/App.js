import { useEffect, useState } from "react";
import "./App.css";
import Login from "./jsx-folder/Login";
import TrackerList from "./jsx-folder/TrackerList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Child from "./jsx-folder/Child";
import AddChild from "./jsx-folder/AddChild";
import { getTokenCall } from "./firebase";

function App() {
  const [isTokenFound, setTokenFound] = useState(false);
  const [fcmToken, setFcmToken] = useState("");
  getTokenCall(setTokenFound, setFcmToken);

  useEffect(() => {
    console.log({ isTokenFound });
  }, [isTokenFound]);

  return (
    <BrowserRouter>
      <p>Token: {fcmToken}</p>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tracker-list" element={<TrackerList />} />
        <Route path="/Child" element={<Child />} />
        <Route path="/AddChild" element={<AddChild />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
