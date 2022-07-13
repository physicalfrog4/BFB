import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/get-message?name=Static Web Apps")
    .then(res => res.text())
    .then(data => setMessage(data));
  }, []);
}

export default App;
