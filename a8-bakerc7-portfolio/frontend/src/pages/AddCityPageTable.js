import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { BsBuildingAdd } from "react-icons/bs";


// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddCityPageTable = () => {

    const [name, setName]       = useState('');
    const [dateAdded, setdateAdded]         = useState('');
    const [priorityLevel, setpriorityLevel] = useState(0);
    
    const redirect = useNavigate();

    const addCity = async () => {
        const newCity = { name, dateAdded, priorityLevel };
        const response = await fetch('/cities', {
            method: 'post',
            body: JSON.stringify(newCity),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Successfully Added City`);
        } else {
            alert(`Error: Unable to add city, please check the format. = ${response.status}`);
        }
        redirect("/");
    };


    return (
        <>
        <article>
            <h2>Add a city</h2>
            <p>Paragraph about this page.</p>
            
            <table id="cities">
                <caption>Which city are you adding?</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date Added</th>
                        <th>Priority Level</th>
                        <th><BsBuildingAdd /></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="name">City name</label>
                        <input
                            type="text"
                            placeholder="Name of the city"
                            value={name}
                            onChange={e => setName(e.target.value)} 
                            id="name" />
                    </td>

                    <td><label for="dateAdded">Date added</label>
                        <input
                            type="date"
                            value={dateAdded}
                            placeholder="Today's Date"
                            onChange={e => setdateAdded(e.target.value)} 
                            id="dateAdded" />
                    </td>

                    <td><label for="priorityLevel">Priority Level</label>
                        <input
                            type="number"
                            placeholder="Priority level of visiting"
                            value={priorityLevel}
                            onChange={e => setpriorityLevel(Number(e.target.value))} 
                            id="priorityLevel" />
                    </td>

                    <td>
                    <label for="submit">Submit</label>
                        <button
                            type="submit"
                            onClick={addCity}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddCityPageTable;