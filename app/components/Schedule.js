import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

const Schedule = () => {
  const [title, setTitle] = useState(false);
  useEffect(() => {
    setTitle('Schedule');
  }, []);

  return (
    <div>
      <h1 className="text-success">{title}</h1>
    </div>
  );
};

export default Schedule;
