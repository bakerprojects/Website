// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 


import Destinations from './pages/BucketCities.js';
import Home from './pages/HomePage.js';
import Topics from './pages/TopicsPage.js';
import Gallery from './pages/GalleryPage.js';
import Order from './pages/OrderPage.js';
//import Contact from './pages/ContactPage.js';



import CitiesPage from './pages/BucketCities.js';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
//import AddCityPageForm from './pages/AddCityPageForm';
//import EditCityPageForm from './pages/EditCityPageForm';

// If your schema requires SHORT data input, then use the TABLE design.
import EditCityPageTable from './pages/EditCityPageTable';
import AddCityPageTable from './pages/AddCityPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [city, setCityToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

        <header>
          <h1>
              <img 
                    src="android-chrome-192x192.png"
                    alt="favicon"
                    title="© 2023 Cameron Baker"
                />
            Cameron Baker
          </h1>
        </header>



          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/destinations" element={<Destinations />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/topics" element={<Topics />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/Order" element={<Order />} />
                    <Route path="/" element={<CitiesPage setCity={setCityToEdit}/>} />
                 

                    <Route path="/create" element={<AddCityPageTable />} /> 
                    <Route path="/update" element={<EditCityPageTable cityToEdit={city} />} />


                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Cameron Baker</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;