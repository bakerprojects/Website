import React from 'react';
import City from './City';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function CityList({ cities, onDelete, onEdit }) {
    return (
        <table id="cities">
            <caption>Add and Edit Cities</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date Added</th>
                    <th>Priority Level</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {cities.map((city, i) => 
                    <City 
                        city={city} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default CityList;
