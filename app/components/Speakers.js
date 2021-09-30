import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
// import apiUrl from '../../apiConfig'
// import axios from 'axios'

const Speakers = () => {
  const [title, setTitle] = useState(false);
  useEffect(() => {
    setTitle('Speakers');
  }, []);

  return (
    <div>
      <h1 className="text-success">{title}</h1>
    </div>
  );
};

export default Speakers;
