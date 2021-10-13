import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const About = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    setDarkMode(false);
  }, []);
  const lightSwitch = (
    <Button
      variant="primary"
      onClick={() => {
        if (darkMode === false) {
          setDarkMode(true);
        } else {
          setDarkMode(false);
        }
      }}
    >
      Dark Mode
    </Button>
  );

  const speaker = <Link to="/speakers" />;

  return (
    <div>
      <h1 className="text-success">Speakers</h1>
      <p>{lightSwitch}</p>
      <p>{speaker}</p>
      {darkMode === false ? <p>Dark Mode is on</p> : <p>Dark Mode is off</p>}
    </div>
  );
};

export default About;
