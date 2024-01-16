import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CityList from '../components/CityList';
import { Link } from 'react-router-dom';

import { BsBuildingAdd } from "react-icons/bs";


function CitiesPage({ setCity }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [cities, setCities] = useState([]);

    // RETRIEVE the entire list of cities
    const loadCities = async () => {
        const response = await fetch('/cities');
        const cities = await response.json();
        setCities(cities);
    } 
    

    // UPDATE a single city
    const onEditCity = async city => {
        setCity(city);
        redirect("/update");
    }


    // DELETE a single city  
    const onDeleteCity = async _id => {
        const response = await fetch(`/cities/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/cities');
            const cities = await getResponse.json();
            setCities(cities);
        } else {
            console.error(`City was successfully deleted = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the cities
    useEffect(() => {
        loadCities();
    }, []);

    // DISPLAY the cities
    return (
        <>
            <h2>List of Cities</h2>
            <p>Here you will find a bucket list of cities to visit in the future. There is a record of the date that each city was added as well as the priority level for visiting that city.
                The purpose of this is create a travel guide for the future. The priority level ranges from 1 to 5, with 5 being the highest priority.
                Click the button below to add a new city to the list.
            </p>

            <Link to="/create">
            <button><BsBuildingAdd /></button>
            </Link>

            <p> </p>

            <CityList 
                cities={cities} 
                onEdit={onEditCity} 
                onDelete={onDeleteCity} 
            />
        </>
    );
}

export default CitiesPage;