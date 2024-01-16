import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/home">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/order">Order</Link>
    </nav>
  );
}

export default Navigation;
